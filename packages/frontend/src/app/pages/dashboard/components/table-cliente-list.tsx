import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import { Text } from "@/components/ui/text";
import { useClientFecth } from "@/hook/useClients";
import { clienteModel } from "@/types/clienteModel";
import { useState } from "react";

export function TableWithListClients() {
    const {data} = useClientFecth()
    const [searchTerm, setSearchTerm] = useState<string>('');
    const clientes = data?.data as clienteModel[] || [];
    const searchTermByName = clientes.filter((c) => c.nome.toLowerCase().includes(searchTerm.toLowerCase()));
    const searchTermByEmail = clientes.filter((c) => c.email.toLowerCase().includes(searchTerm.toLowerCase()));
    const searchTermByPhone = clientes.filter((c) => c.telefone.toLowerCase().includes(searchTerm.toLowerCase()));
    const filteredClientesSet = new Set([
        ...searchTermByName,
        ...searchTermByEmail,
        ...searchTermByPhone,
    ]);
    const filteredClientes = Array.from(filteredClientesSet);
    return(
        <>
        <main className="row-span-9 row-start-3 col-span-12">
            {clientes.length > 0 &&  <div className="max-w-96">
                <Input 
              placeholder="Pesquise por nome, email ou telefone"
              onChange={(e) => setSearchTerm(()=>e.target.value)}
              />
             </div>}
             {clientes.length > 0 &&
             <Table>
             <TableRow>
                <TableHead className="w-[330px]">nome</TableHead>
                <TableHead>email</TableHead>
                <TableHead className="text-right">telefone</TableHead>
                </TableRow>
                <TableBody>
                {filteredClientes.map(({id,nome,telefone,email}) => (
                    <TableRow key={id}>
                        <TableCell className="font-medium">{nome}</TableCell>
                        <TableCell>{email}</TableCell>
                        <TableCell  className="text-right">{telefone}</TableCell> 
                    </TableRow>
                    ))}
                </TableBody>
             </Table>
             }
             {clientes.length === 0 && 
                 <>
                 <Card className="w-full min-h-[50vh] flex items-center justify-center">
                    <Text> Não há registros de clientes</Text>
                 </Card>

                 </>}

                 {/* <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58823.57767986739!2d-42.293657599999996!3d-22.858956799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x976f309b920fc3%3A0xa6f1d838d786d4ca!2sAssa%C3%AD%20Araruama!5e0!3m2!1sen!2sbr!4v1706885496475!5m2!1sen!2sbr" 
                 width="800" 
                 height="600" 
                 loading="lazy" 
                 ></iframe> */}
            </main>
        </>
    )
}