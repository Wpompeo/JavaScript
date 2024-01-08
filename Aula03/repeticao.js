const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@gmail.com"
};
//objetos em objetos
cliente.enderecos = [
    {
        rua: "Cristo Rei",
        numero: 111,
        apartamento: true,
        complemento: "Ap 123",

    },
];
// //percorre chaves clientes
// for (let chave in cliente) {
//     console.log(chave + "\n");

// }

// //percorre valores das chaves.
// for (let chave in cliente) {
//     console.log(cliente[chave]);
// }
for (let chave in cliente){
    let tipo = typeof cliente[chave];
    if (tipo !== "object" && tipo !== "function"){

       console.log(`A chave ${chave} tem o valor: ${cliente[chave]}`);

    }
}
