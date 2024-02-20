class Endereco {
      private logradouro: string;
      private bairro: string;
      private cidade: string;
      private estado: string;
      private cep: number;

      constructor(logradouro: string, bairro: string, cidade: string, estado: string, cep: number) {
        this.logradouro = logradouro;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
        this.cep = cep;
    }
}

export default Endereco;
    
  