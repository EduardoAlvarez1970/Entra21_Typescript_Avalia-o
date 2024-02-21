import Pessoa from "./pessoa";
import Apartamento from "./apartamento";

class Morador {
    protected pessoa: Pessoa;
    private apartamento: Apartamento;
    
    constructor(pessoa: Pessoa, apartamento: Apartamento){
        this.pessoa = pessoa;
        this.apartamento = apartamento;
    }
    public dataNascimento(): Date {
        return this.pessoa.setDataNascimento();
    }
}

export default Morador;

//OK 