import { Schema } from "@/app/pages/dashboard/components/formAddClient/components/useFormsAddClient"
import { instance } from "@/lib/axios"
import { useQuery } from "@tanstack/react-query"
import { AxiosPromise } from "axios"

export function useAddNewClient() {

  
const  fecth = async (data:Schema): AxiosPromise<void> => {
    const API_URL = 'cliente/register'
    const body = {
      nome: data.nome,
      email: data.email,
      telefone: data.telefone,
      rua: data.rua,
      numero: data.numero,
      bairro: data.bairro,
      cidade: data.cidade,
      estado: data.estado,
    }
    const result = await instance.post(API_URL,body)
    
    return result;
  }

    const { isPending, error, data } = useQuery({
        queryKey: ['useNewClient'],
        queryFn: () => fecth,
      })
    return{isPending,error,data,fecth}
}