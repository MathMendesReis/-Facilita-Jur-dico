import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { Link, useLocation } from 'react-router-dom';
import { TableWithListClients } from "./components/table-cliente-list";
import { FormAddCliente } from "./components/formAddClient";
import { AddAndressStore } from "./components/dialog";
import { DialogRouter } from "./components/dialog-router";
import { TableListRouter } from "./components/table-rotas-list";


  
export function Dashboard() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const showParam = queryParams.get('show');
    return(
       <>
        <Card className="py-7 min-h-screen grid grid-cols-12 grid-rows-12">
        <header className=" row-span-1 col-span-12 flex items-start justify-start flex-col">
            <div className="flex justify-start flex-col items-start gap-5">
                <Text className="text-start">Dashboard</Text>
            </div>
              <div className="w-full grid grid-cols-12  mt-5">
                <Card className="col-span-4 bg-zinc-100 rounded-md ml-auto flex">
                        <Button variant='ghost'>
                            <Link to='/' title="ir para home">
                                <Text className="text-base">home</Text>
                            </Link>
                        </Button>
                        <Button variant='ghost'>
                            <Link to='/dashboard?show=overwiew' title="ir para dashboard">
                                <Text className="text-base">overview</Text>
                            </Link>
                        </Button>
                        <Button variant='ghost'>
                            <Link to='/dashboard?show=form' title="ir para formulurio de cadastramento de cliente">
                                <Text className="text-base">adicionar cliente</Text>
                            </Link>
                        </Button>
                        <Button variant='ghost'>
                            <Link to='/dashboard?show=routers' title="ir para formulurio de cadastramento de cliente">
                                <Text className="text-base">rotas</Text>
                            </Link>
                        </Button>
                        <AddAndressStore/>
                    </Card>

                </div>
            </header>
          {showParam === 'overwiew' && <TableWithListClients/>}
          {showParam === 'routers' && <TableListRouter/>}
          {showParam === 'form' && 
            <main className="row-span-9 row-start-3 col-start-4 col-span-6">
                <FormAddCliente.Root/>
            </main>
          }
        </Card>
       </>
    )
}