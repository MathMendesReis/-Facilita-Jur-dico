import { instance } from "@/lib/axios"
import { clienteModel } from "@/types/clienteModel"
import { useQuery } from "@tanstack/react-query"
import { AxiosPromise } from "axios"

export function useClientFecth() {
    const API_URL = 'cliente'

    const fecth = (): AxiosPromise<clienteModel[]> => {
        return instance.get(API_URL)
      }
    const { isPending, error, data } = useQuery({
        queryKey: ['useClientFecth'],
        queryFn: () => fecth(),
      })


    return{isPending,error,data}
}