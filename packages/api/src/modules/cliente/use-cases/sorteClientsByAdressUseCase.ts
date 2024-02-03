import { ClienteDB } from "../models/clienteModel";
import { FindAdressStoreUseCase } from "./getAdressStore";
import { GetAllClienteUseCase } from "./getAllClienteUseCase";

interface ClienteFormat {
    id: string;
    nome: string;
    email: string;
    telefone: string;
    rua: string;
    numero: string | null;
    bairro: string;
    cidade: string;
    estado: string;
    lat: string;
    lon: string;
    distancia: number;
    creation_date: string;
  }
// Interface que representa a estrutura para ordernar os clientes de acordo com a proximidade
export class SortClientsByAddressUseCase {
    constructor(
        private ClienteUseCase: GetAllClienteUseCase,
        private RegisterUseCase: FindAdressStoreUseCase,
    ) {}

    public sortClients = async () => {
        const clients = await this.ClienteUseCase.getAll();
        const [addressStoreDB] = await this.RegisterUseCase.findAdressStore();
        
        if (addressStoreDB.lon === null || addressStoreDB.lat === null) {
            return [];
        }
         const latNumero: number = parseFloat(addressStoreDB.lat);
         const lonNumero: number = parseFloat(addressStoreDB.lon);
         const results = await this.teste( clients,latNumero,lonNumero);
         return results.sort((a, b) => a.distancia - b.distancia);
    };

    private teste =async (clients: ClienteDB[],latNumero:number,lonNumero:number):Promise<ClienteFormat[]> => {
        const results: ClienteFormat[] = [];

        clients.forEach((client) => {
            if (client.lon === null || client.lat === null) {
                return; 
            }

            const distancia = this.calcularDistancia(
                parseFloat(client.lat),
                parseFloat(client.lon),
                latNumero,
                lonNumero
            );

            results.push(
                { 
                    id: client.id,
                    nome: client.nome,
                    email: client.email,
                    telefone: client.telefone,
                    rua: client.rua,
                    numero: client.numero,
                    bairro: client.bairro,
                    cidade: client.cidade,
                    estado: client.estado,
                    lat: client.lat,
                    lon: client.lon,
                    distancia: distancia,
                    creation_date: client.creation_date,
                });
        });
        return results
    }
    private calcularDistancia(lat1: number, lon1: number, lat2: number, lon2: number): number {
        // Constante que representa o raio médio da Terra em quilômetros
        const R = 6371;
        // Calcula a diferença de latitude e longitude em radianos
        const dLat = (lat2 - lat1) * (Math.PI / 180);
        const dLon = (lon2 - lon1) * (Math.PI / 180);
        // Fórmula de Haversine para calcular a distância entre dois pontos em uma esfera
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        // Calcula a distância em quilômetros
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        // Retorna a distância calculada
        const distancia = R * c;
        return distancia;
    }
}
