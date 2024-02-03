import { Schema } from "@/app/pages/dashboard/components/useFormDIalog"
import { instance } from "@/lib/axios"
import { useQuery } from "@tanstack/react-query"
import { AxiosPromise } from "axios"

export function useAddNewAddresStore() {

  
const  fecth = async (data:Schema): AxiosPromise<void> => {
    const API_URL = 'cliente/register/adress'
    const body = {
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
        queryKey: ['useAddNewAddresStore'],
        queryFn: () => fecth,
      })
    return{isPending,error,data,fecth}
}