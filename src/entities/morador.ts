import Apartamento from "./apartamento";
import Pessoa from "./pessoa";

class Morador {
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