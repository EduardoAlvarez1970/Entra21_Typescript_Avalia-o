import Pessoa from "./pessoa";
import Apartamento from "./apartamento";

class Morador {
    protected pessoa: Pessoa;
    private apartamento: Apartamento;
    
    constructor(pessoa: Pessoa, apartamento: Apartamento){
        this.pessoa = pessoa;
        this.apartamento = apartamento;
    }
    public getIdade(): number {
        const dataNascimento = this.pessoa.getDataNascimento();
        const hoje = new Date();
        const diferencaAnos = hoje.getFullYear() - dataNascimento.getFullYear();
        return diferencaAnos;
    }

    getPessoa(): Pessoa {
        return this.pessoa;
    }
}

export default Morador;

//OK 