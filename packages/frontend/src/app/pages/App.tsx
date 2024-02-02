import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { Link } from "react-router-dom";

export function App() {
  return(
    <>
      <header className="min-h-20 px-5">
          <section className=" min-h-20 max-w-[1440px] mx-auto flex items-center justify-between px-5">
           <div>
            <div>
                <Text className="text-base">Facilita juridico</Text>
            </div>
           </div>
            <button>
              <Text className="text-base">Ir para dashboard</Text>
            </button>
          </section>
      </header>
      <Card className=" min-h-[85vh] grid grid-cols-12">
        <aside className="col-span-5 flex flex-col justify-end items-end bg-[#2563eb] rounded-md pb-4">
        <div className="px-5">
          <Text className="text-base text-[#ffffff]">“This library has saved me countless hours of work and helped me deliver stunning designs to my clients faster than ever before.”
          Sofia Davis</Text>
        </div>
       
        </aside>
        <main className="col-span-7 col-start-6 grid grid-rows-4 grid-cols-7">
          <section className=" min-w-16 min-h-16 row-start-2 row-span-2 col-start-2 col-span-5">
           <div className="max-w-[350px] flex flex-col  gap-4">
            <Text>Seja bem-vindo ao teste de Programação Desenvolvedor Facilita Jurídico</Text>
              <Button className="w-full bg-[#2563eb] hover:opacity-95 hover:bg-[#2563eb]">
                <p>ir para codigo fonte</p>
              </Button>
              <div>
               <div className="flex items-center">
                <div className="bg-[#0f172a] h-[1px] w-full opacity-65"/>
                  <Text className="text-base font-normal">ou</Text>
                <div className="bg-[#0f172a] h-[1px] w-full opacity-65"/>
               </div>
              </div>
                <Link to='/dashboard?show=overwiew' title="ir para dashboard">
                  <Button className="w-full bg-[#2563eb] hover:opacity-95 hover:bg-[#2563eb]">
                      <p>ir para dashboard</p>
                  </Button>
                </Link>
           </div>
          </section>
        </main>
      </Card>
    </>
  )
}