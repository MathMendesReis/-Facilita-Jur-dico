// Root.tsx

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Text } from "@/components/ui/text";
import { Schema, useCustomForm } from "./useFormsAddClient";
import { useAddNewClient } from "@/hook/useAddNewClient";
import { Button } from "@/components/ui/button";

export function Root() {
  const { handleSubmit, register, errors,reset } = useCustomForm();
  const { fecth } = useAddNewClient();
  const onSubmit = async (data: Schema) => {
    await fecth(data);
    reset()
  };

  return (
    <form onSubmit={handleSubmit((data) => 
      onSubmit(data)
    )}>
      <Label>
        <Text className="text-sm text-start my-3">Nome</Text>
        <Input {...register('nome')} placeholder={'Pedro Alvares Cabral'}/>
        <div className="py-3">
          {errors.nome?.message && <p>{errors.nome?.message}</p>}
        </div>
      </Label>
      <Label>
        <Text className="text-sm text-start my-3">Email</Text>
        <Input {...register('email')} placeholder={'pedrinhoimperador@gmail.com'}/>
        <div className="py-3">
          {errors.email?.message && <p>{errors.email?.message}</p>}
        </div>
      </Label>
      <Label>
        <Text className="text-sm text-start my-3">Telefone</Text>
        <Input {...register('telefone')} placeholder={'22 998989898'} />
        <div className="py-3">
          {errors.telefone?.message && <p>{errors.telefone?.message}</p>}
        </div>
      </Label>
      <Label>
        <Text className="text-sm text-start my-3">Rua</Text>
        <Input {...register('rua')} placeholder={'nicaragua'} />
        <div className="py-3">
          {errors.rua?.message && <p>{errors.rua?.message}</p>}
        </div>
      </Label>
      <Label>
        <Text className="text-sm text-start my-3">Número</Text>
        <Input {...register('numero')} placeholder={'53'}/>
        <div className="py-3">
          {errors.numero?.message && <p>{errors.numero?.message}</p>}
        </div>
      </Label>
      <Label>
        <Text className="text-sm text-start my-3">Bairro</Text>
        <Input {...register('bairro')} placeholder={'rua do fogo'}/>
        <div className="py-3">
          {errors.bairro?.message && <p>{errors.bairro?.message}</p>}
        </div>
      </Label>
      <Label>
        <Text className="text-sm text-start my-3">Cidade</Text>
        <Input {...register('cidade')} placeholder={'sao pedro da aldeia'}/>
        <div className="py-3">
          {errors.cidade?.message && <p>{errors.cidade?.message}</p>}
        </div>
      </Label>
      <Label>
        <Text className="text-sm text-start my-3">Estado</Text>
        <Input {...register('estado')} placeholder={'são pedro da aldeia'} />
        <div className="py-3">
          {errors.estado?.message && <p>{errors.estado?.message}</p>}
        </div>
      </Label>
      <div className="my-5 flex items-center justify-center">
        <Button type="submit" className="cursor-pointer bg-blue-500 hover:bg-blue-400">
          <Text className=" text-white text-center text-base ">Enviar</Text>
        </Button>
      </div>
    </form>
  );
}
