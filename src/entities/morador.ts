import Pessoa from "./pessoa";

class Morador {
    private pessoa: Pessoa;
    
    constructor(pessoa: Pessoa){
        this.pessoa = pessoa;
    }
}

export default Morador;