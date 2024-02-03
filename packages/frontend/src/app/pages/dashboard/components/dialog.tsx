import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Text } from "@/components/ui/text"
import { Schema, useCustomFormDialog } from "./useFormDIalog"
import { useAddNewAddresStore } from "@/hook/useAddNewAddresStore"
import { useAdressStoreFecth } from "@/hook/useAdressStoreFecth"

export function AddAndressStore() {
 const {errors,handleSubmit,register,reset } = useCustomFormDialog()
 const {isPending} = useAdressStoreFecth()
 const {fecth} = useAddNewAddresStore()
 const onSubmit = async (data: Schema) => {
  await fecth(data);
  reset()
};

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">
            <Text className="text-base">editar endereço</Text>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            <Text className="text-base">editar endereço</Text>
          </DialogTitle>
          <DialogDescription>
          <Text className="text-base font-normal">
            Adicione o endereço da sua loja
          </Text>
          </DialogDescription>
        </DialogHeader>
        {!isPending && <form 
         onSubmit={handleSubmit((d)=>onSubmit(d))}
        >
            <div className="grid gap-4 py-4">

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="rua" className="text-right">
              Rua
            </Label>
            <Input id="rua"  className="col-span-3" {...register('rua')}  />
            {errors.rua?.message && <p>{errors.rua?.message}</p>}

          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="cidade" className="text-right">
              Cidade
            </Label>
            <Input id="cidade"  className="col-span-3" {...register('cidade')}/>
            {errors.cidade?.message && <p>{errors.cidade?.message}</p>}

          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="estado" className="text-right">
              Estado
            </Label>
            <Input id="estado"  className="col-span-3" {...register('estado')}/>
            {errors.estado?.message && <p>{errors.estado?.message}</p>}

          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="bairro" className="text-right">
              Bairro
            </Label>
            <Input id="bairro"  className="col-span-3" {...register('bairro')}/>
            {errors.bairro?.message && <p>{errors.bairro?.message}</p>}

          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="numero" className="text-right">
              Numero
            </Label>
            <Input id="numero"  className="col-span-3"  {...register('numero')}/>
            {errors.numero?.message && <p>{errors.numero?.message}</p>}

          </div>
          </div>

        <DialogFooter>
          <Button type="submit">Salvar</Button>
        </DialogFooter>
        </form>}
      </DialogContent>
    </Dialog>
  )
}
