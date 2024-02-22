Atividade Avaliativa de TypeScript
1. Crie um projeto para gerenciar um condomínio, você precisará gerenciar os moradores, os
funcionários e os apartamentos.
2. Crie uma classe para representar uma entidade cargo com campos para a descrição e a carga
horária de trabalho e encapsule os campos.
3. Crie uma classe para representar uma entidade morador com campos para o nome, CPF, data
de nascimento, endereço (pode ser uma nova classe/entidade contendo os campos
logradouro, bairro, cidade, estado e cep), telefone, celular, e-mail, apartamento, lembrando
que o campo apartamento deve ser uma referência à uma classe Apartamento. (Encapsule os
campos)
4. Crie uma classe para representar uma entidade funcionário com campos para o nome, CPF,
data de nascimento, endereço (pode ser uma nova entidade contendo os campos logradouro,
bairro, cidade, estado e cep), telefone, celular, e-mail, cargo, salário. (Encapsule os campos)
5. Crie uma classe para representar uma entidade apartamento com campos para o bloco, o
numero do apartamento, o nome do proprietário e uma lista de moradores. (Encapsule os
campos)
6. Utilizando os conceitos de Herança, refatore as classes Morador e Funcionário identificando
o que elas têm em comum, criando uma nova classe Pessoa para a representação desses
campos.
7. Na classe Apartamento crie uma função para retornar uma lista de moradores menores de
idade.
8. Em um arquivo de testes (pode ser um index.js) crie e popule uma lista de Funcionários.
Percorra essa lista retornando uma lista dos salários dos funcionários que atuam no cargo de
“Zelador”.
9. No mesmo arquivo de testes do exercício 8, crie instâncias das classes Morador e
Apartamento e popule um apartamento, preenchendo os moradores de cada apartamento.
10. Ainda no arquivo de testes, apresente (pode ser no console) os moradores menores de idade
dos apartamentos criados no Exercício 9.
