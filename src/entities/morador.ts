import Apartamento from "./apartamento";
import Pessoa from "./pessoa";

class Morador extends Pessoa {
    private pessoa: Pessoa;
    private apartamento: Apartamento;

    constructor(pessoa: Pessoa, apartamento: Apartamento){
        this.pessoa = pessoa;
        this.apartamento = apartamento;
        
    }

    public dataNascimento(){
        return this.pessoa.exibirDataNascimento
    }

}

export default Morador;

// 5. Classe Morador
class Morador extends Pessoa {
    constructor(
      nome: string,
      cpf: string,
      dataNascimento: Date,
      endereco: Endereco,
      telefone: string,
      celular: string,
      email: string,
      private apartamento: Apartamento
    ) {
      super(nome, cpf, dataNascimento, endereco, telefone, celular, email);
    }
  }