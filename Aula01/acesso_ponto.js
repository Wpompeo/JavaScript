const cliente = {
    nome: "Santiago",
    idade: 9,
    cpf: "1112223377",
    email:"santiago@gmail.com",
};
//acessando propriedades cliente.nome propriedade
console.log(`O nome do cliente é: ${cliente.nome} e sua idade é ${cliente.idade} anos`);

console.log(`Imprimindo via colchetes: ${cliente["idade"]} e sua idade é ${cliente["cpf"]} cpf`);