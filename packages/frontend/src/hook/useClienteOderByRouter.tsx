import { instance } from "@/lib/axios"
import { useQuery } from "@tanstack/react-query"
import { AxiosPromise } from "axios"

export interface ClienteFormat {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
  lat: string;
  lon: string;
  distancia: number;
  creation_date: string;
}
export function useClienteOderByRouter() {
    const API_URL = 'cliente/sort'

    const fecth = (): AxiosPromise<ClienteFormat[]> => {
        return instance.get(API_URL)
      }
    const { isPending, error, data } = useQuery({
        queryKey: ['useClienteOderByRouter'],
        queryFn: () => fecth(),
      })


    return{isPending,error,data}
}