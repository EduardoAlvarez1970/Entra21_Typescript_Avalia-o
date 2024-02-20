import Apartamento from "./entities/apartamento";
import Cargo from "./entities/cargo";
import Endereco from "./entities/endereco";
import Funcionario from "./entities/funcionario";
import Morador from "./entities/morador";
import Pessoa from "./entities/pessoa";

const funcionarios: Funcionario[] = [
    new Funcionario('João','123.456.789-00', new Date(1980, 5, 15),new Endereco('Rua A', 'Bairro 1', 'Cidade 1', 'Estado 1', '12345-678'),
      '123456789',
      '987654321',
      'joao@example.com',
      new Cargo('Zelador', 40),
      3000
    ),
    // Adicione mais funcionários conforme necessário
  ];

  const salariosZeladores = funcionarios
  .filter((funcionario) => funcionario.cargo.descricao === 'Zelador')
  .map((zelador) => zelador.salario);

console.log('Salários dos zeladores:', salariosZeladores);

const apartamento = new Apartamento('Bloco A', 101, 'Proprietário A');

const morador1 = new Morador(
  'Maria',
  '987.654.321-00',
  new Date(2005, 3, 10),
  new Endereco('Rua B', 'Bairro 2', 'Cidade 2', 'Estado 2', '54321-876'),
  '987654321',
  '123456789',
  'maria@example.com',
  apartamento
);