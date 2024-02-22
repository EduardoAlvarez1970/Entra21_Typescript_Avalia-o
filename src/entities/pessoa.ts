import Endereco from "./endereco";

class Pessoa {
      private nome: string;
      private cpf: number;
      private dataNascimento: Date;
      private endereco: Endereco;
      private telefone: number;
      private celular: number;
      private email: string;

      constructor(nome: string, cpf: number, dataNascimento: Date, endereco: Endereco, telefone: number, celular: number, email: string) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.endereco = endereco;
        this.telefone = telefone;
        this.celular = celular;
        this.email = email;
    }

    public getNome(){
      return this.nome
  }

  public getDataNascimento(){
      return this.dataNascimento
  }
}

export default Pessoa;

//OK

