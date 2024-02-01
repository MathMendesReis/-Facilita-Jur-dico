interface Cliente {
    nome: string;
    coordenada_x: number;
    coordenada_y: number;
    creation_date: string;
}

export class ClienteModel {
    constructor(
		private id: string,
		private nome: string,
		private email: string,
		private telefone: string,
		private coordenada_x: number,
		private coordenada_y: number,
		private creation_date: string,
		
	) {}
	public clienteModel(): Cliente {
		return {
			nome: this.nome,
			coordenada_x: this.coordenada_x,
			coordenada_y: this.coordenada_y,
			creation_date: this.creation_date,
		};
	}
}


