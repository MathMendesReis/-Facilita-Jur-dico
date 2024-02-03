import { AxiosResponse } from "axios";
import axios from 'axios';

interface NominatimResult {
    lat: string;
    lon: string;
}

// Interface que representa a estrutura da resposta da API Nominatim
// Classe GeocodingService para obter coordenadas a partir de um endereço

export class GeocodingService {
    // Método assíncrono para obter coordenadas a partir de um endereço
    // Método assíncrono independente, por isso usei o metodo static
    static async getCoordinatesFromAddress(address: string): Promise<{ latitude: string; longitude: string } | null> {
        try {
            // Faz uma requisição para a API Nominatim para obter coordenadas para o endereço fornecido
            const response: AxiosResponse<NominatimResult[]> = await axios.get(
                `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`
            );

            const result = response.data[0];

            if (result) {
                const latitude = result.lat;
                const longitude = result.lon;
                return { latitude, longitude };
            } else {
                console.log('Endereço não encontrado');
                return null;
            }
        } catch (error) {
            console.error('Erro ao obter coordenadas:');
            throw error;
        }
    }
}
