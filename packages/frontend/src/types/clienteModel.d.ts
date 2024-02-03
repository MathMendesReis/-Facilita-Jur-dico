export interface clienteModel {
    id: string,
    nome: string,
    email: string,
    telefone: string,
    rua: string;
    numero: string | null;
    bairro: string;
    cidade: string;
    estado: string;
    creation_date: string;
}