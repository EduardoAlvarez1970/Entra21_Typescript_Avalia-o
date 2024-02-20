import Cargo from "./cargo";
import Pessoa from "./pessoa";

class Funcionario {
    private pessoa: Pessoa;
    private cargo: Cargo;
    private salario: number;

    constructor(pessoa: Pessoa, cargo: Cargo, salario: number) {
        this.pessoa = pessoa;
        this.cargo = cargo;
        this.salario = salario;
    }
  }

  export default Funcionario;