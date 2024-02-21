import Apartamento from "./entities/apartamento";
import Cargo from "./entities/cargo";
import Endereco from "./entities/endereco";
import Funcionario from "./entities/funcionario";
import Morador from "./entities/morador";
import Pessoa from "./entities/pessoa";

const funcionarios: Funcionario[] = [
    new Funcionario(
        new Pessoa(
            'Eduardo',
            123.456.789.000,
            new Date(1980, 5, 15),
            new Endereco('Rua A', 'Jurere', 'florianopolis', 'SC', 88053-700),
            489994225,
            4899995555,
            'eduaolavarez@gmail.com'),
            new Cargo('Zelador', 50),
            3000
        )
    )
];
