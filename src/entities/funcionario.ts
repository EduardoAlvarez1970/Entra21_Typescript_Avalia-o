import Pessoa from "./pessoa";
import Cargo from "./cargo";

class Funcionario {
    private pessoa: Pessoa;
    private cargo: Cargo;
    private salario: number;

    constructor(pessoa: Pessoa, cargo: Cargo, salario: number){
        this.pessoa = pessoa;
        this.cargo = cargo;
        this.salario = salario;
    }

    public getCargo(){
        return this.cargo
    }

    public getSalario(){
        return this.salario
    }
}

export default Funcionario;

//OK