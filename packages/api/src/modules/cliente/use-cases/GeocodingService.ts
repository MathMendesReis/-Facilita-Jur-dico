import { AxiosResponse } from "axios";
import axios from 'axios';

interface NominatimResult {
    lat: string;
    lon: string;
}

export class GeocodingService {
    static async getCoordinatesFromAddress(address: string): Promise<{ latitude: string; longitude: string } | null> {
        try {
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
