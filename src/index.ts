import Apartamento from "./entities/apartamento";
import Cargo from "./entities/cargo";
import Endereco from "./entities/endereco";
import Funcionario from "./entities/funcionario";
import Morador from "./entities/morador";
import Pessoa from "./entities/pessoa";

const Zelador = new Cargo("Zelador", 40);
const Sindico = new Cargo("Sndico", 30);

const endereco1 = new Endereco("Av Dos Buzios 3333", "Jurere", "Florianopolis", "SC", 88053700)
const endereco2 = new Endereco("Rua das Baleias 223", "Jurere", "Florianopolis", "SC", 88053700)

const pessoa1 = new Pessoa("Eduardo Alvarez", 80117532908, new Date(1970,10,12), endereco1, 48-9999-8888, 49-5555-4444, "edualvarez@gmail.com")
const pessoa2 = new Pessoa("Martha Perez", 80117532909, new Date(1990,12,2), endereco1, 48-9559-5588, 49-5555-4444, "martaperez@gmail.com")
const pessoa3 = new Pessoa("Jose sand", 80117532910, new Date(1953,5,2), endereco1, 48-9946-8248, 49-5555-4444, "josecito@gmail.com")
const pessoa4 = new Pessoa("Lolo Miranda", 80117532911, new Date(1966,12,2), endereco2, 48-9559-5588, 49-5555-4444, "lolitoz@gmail.com")
const pessoa5 = new Pessoa("Pepe Chatruc", 80117532912, new Date(1988,5,2), endereco2, 48-9946-8248, 49-5555-4444, "pepito@gmail.com")
const pessoa6 = new Pessoa("David Beckham", 80117532913, new Date(1990,12,2), endereco2, 48-9559-5588, 49-5555-4444, "davidbeckz@gmail.com")


const funcionario1 = new Funcionario(pessoa1, Zelador, 4000)
const funcionario2 = new Funcionario(pessoa2, Zelador, 4000)
const funcionario3 = new Funcionario(pessoa3, Sindico, 5500)

const listaFuncionarios = [funcionario1, funcionario2, funcionario3]

const zeladores = listaFuncionarios.filter(funcionario => funcionario.getCargo().getDescricao() === "Zelador");

const salarioZeladores = zeladores.map(zelador => zelador.getSalario());

console.log("Salarios dos zeladores: "+ salarioZeladores)


const apartamento1 = new Apartamento("Bloco 1", 111, "Joao Santana")
const apartamento2 = new Apartamento("Bloco 2", 214, "Marcia Real")

const morador1 = new Morador(pessoa4, apartamento1)
const morador2 = new Morador(pessoa5, apartamento2)
const morador3 = new Morador(pessoa6, apartamento2)

apartamento1.adicionarMorador(morador1);
apartamento2.adicionarMorador(morador2);
apartamento2.adicionarMorador(morador3);

const listaApartamentos = [ apartamento1, apartamento2]

