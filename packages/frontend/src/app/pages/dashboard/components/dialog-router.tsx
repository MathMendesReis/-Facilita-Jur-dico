import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Text } from "@/components/ui/text"
import { TableListRouter } from "./table-rotas-list"


export function DialogRouter() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">
            <Text className="text-base">ver rotas</Text>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogDescription>
          <Text className="text-base font-normal">
          rotas
          </Text>
          </DialogDescription>
        </DialogHeader>
        <TableListRouter/>
      </DialogContent>
    </Dialog>
  )
}
