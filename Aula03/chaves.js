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

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if(!chavesDoObjeto.includes("enderecos")){
    console.error("É necessário ter um endereço cadastrado.")

}
