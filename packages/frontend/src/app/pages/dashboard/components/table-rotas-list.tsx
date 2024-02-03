import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import { Text } from "@/components/ui/text";
import { ClienteFormat, useClienteOderByRouter } from "@/hook/useClienteOderByRouter";
import { useState } from "react";

export function TableListRouter() {
    const {data} = useClienteOderByRouter()
    const [searchTerm, setSearchTerm] = useState<string>('');
    const clientes = data?.data as ClienteFormat[] || [];
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
                <TableHead>rua</TableHead>
                <TableHead>bairro</TableHead>
                <TableHead>cidade</TableHead>
                <TableHead>numero</TableHead>
                </TableRow>
                <TableBody>
                {filteredClientes.map(({id,nome,rua,bairro,cidade,numero}) => (
                    <TableRow key={id}>
                        <TableCell className="font-medium">{nome}</TableCell>
                        <TableCell className="font-medium">{rua}</TableCell>
                        <TableCell className="font-medium">{bairro}</TableCell>
                        <TableCell className="font-medium">{cidade}</TableCell>
                        <TableCell className="font-medium">{numero}</TableCell>
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
            </main>
        </>
    )
}