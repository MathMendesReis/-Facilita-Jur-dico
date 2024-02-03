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

export class SortClientsByAddressUseCase {
    constructor(
        private ClienteUseCase: GetAllClienteUseCase,
        private RegisterUseCase: FindAdressStoreUseCase,
    ) {}

    public sortClients = async () => {
        const clients = await this.ClienteUseCase.getAll();
        const [addressStore] = await this.RegisterUseCase.findAdressStore();

        if (addressStore.lon === null || addressStore.lat === null) {
            return [];
        }

        if (clients.length === 0) {
            return [];
        }

        const latNumero: number = parseFloat(addressStore.lat);
        const lonNumero: number = parseFloat(addressStore.lon);

        const store = {
            lat: latNumero,
            lon: lonNumero,
        };

        const results: ClienteFormat[] = [];

        clients.forEach((client) => {
            if (client.lon === null || client.lat === null) {
                console.log('Coordenadas nulas para cliente:', client.nome);
                return; 
            }

            const distancia = this.calcularDistancia(
                parseFloat(client.lat),
                parseFloat(client.lon),
                store.lat,
                store.lon
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
        results.sort((a, b) => a.distancia - b.distancia);

        return results.sort((a, b) => a.distancia - b.distancia);
    };

    private calcularDistancia(lat1: number, lon1: number, lat2: number, lon2: number): number {
        const R = 6371;
        const dLat = (lat2 - lat1) * (Math.PI / 180);
        const dLon = (lon2 - lon1) * (Math.PI / 180);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distancia = R * c;
        return distancia;
    }
}
