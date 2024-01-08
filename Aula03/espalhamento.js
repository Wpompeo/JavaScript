const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@gmail.com",
    telefone: ["123456789", "910123456"],
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

function ligaParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}
ligaParaCliente(...cliente.telefone);

const encomenda = {
    distinatario: cliente.nome,
   
    
};

console.log(encomenda)