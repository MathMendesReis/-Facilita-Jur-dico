import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import { Text } from "@/components/ui/text";
import { useClientFecth } from "@/hook/useClients";
import { clienteModel } from "@/types/clienteModel";
import { useState } from "react";

  
export function Dashboard() {
    const {data} = useClientFecth()
    const [searchTerm, setSearchTerm] = useState<string>('');

    const clientes = data?.data as clienteModel[] || [];

    const searchTermByName = clientes.filter((c) => c.nome.toLowerCase().includes(searchTerm.toLowerCase()));
    const filteredClientes = searchTermByName

    const isSearchParams = filteredClientes !== undefined

    return(
       <>
        <Card className="py-7 min-h-screen grid grid-cols-12 grid-rows-12">
            <header className=" row-span-1 col-span-12 flex items-center justify-start">
            <div className="flex justify-start flex-col items-start gap-5">
                <Text>Seja bem vindo</Text>
                <Text className="text-base text-start">Seja bem vindo</Text>
            </div>
            </header>
            <main className="row-span-9 row-start-3 col-span-12">
             <div className="max-w-96">
                <Input 
              onChange={(e) => setSearchTerm(()=>e.target.value)}
              />
             </div>
             <Table>
             <TableRow>
                <TableHead className="w-[100px]">nome</TableHead>
                <TableHead>email</TableHead>
                <TableHead className="text-right">telefone</TableHead>
                </TableRow>
                {isSearchParams && <TableBody>
                {filteredClientes.map(({id,nome,telefone,email}) => (
                    <TableRow key={id}>
                        <TableCell className="font-medium">{nome}</TableCell>
                        <TableCell>{email}</TableCell>
                        <TableCell  className="text-right">{telefone}</TableCell> 
                    </TableRow>
                    ))}
                </TableBody>}
             </Table>
            </main>
        </Card>
       </>
    )
}