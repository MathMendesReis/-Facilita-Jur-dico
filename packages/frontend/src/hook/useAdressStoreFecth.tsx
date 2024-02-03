import { instance } from "@/lib/axios"
import { useQuery } from "@tanstack/react-query"
import { AxiosPromise } from "axios"

export interface Address {
  id: string;
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
  latitude: string;
  longitude: string;
  creation_date: string;
}
export function useAdressStoreFecth() {
    const API_URL = 'cliente/adress'

    const fecth = (): AxiosPromise<Address[]> => {
        return instance.get(API_URL)
      }
    const { isPending, error, data } = useQuery({
        queryKey: ['useAdressStoreFecth'],
        queryFn: () => fecth(),
      })



    return{isPending,error,data}
}