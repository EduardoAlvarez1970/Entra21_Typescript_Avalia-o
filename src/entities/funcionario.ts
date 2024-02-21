import Pessoa from "./pessoa";

class Funcionario {
    private pessoa: Pessoa;

    constructor(pessoa: Pessoa){
        this.pessoa = pessoa;
    }
}

export default Funcionario;