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

cliente.enderecos.push({
    rua: "Olralndo Silva",
    numero: 108,
    apartamento: false,
});
//filtrando clientes por apartamento igual a true.
const clientesApartamentos = cliente.enderecos.filter((endereco) => endereco.apartamento === true);

console.log(clientesApartamentos);

console.log(cliente.enderecos);