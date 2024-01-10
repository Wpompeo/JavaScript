//ler arquivo json
const dados = require("./clientes.json");

console.log(dados);
console.log(typeof dados);

//transfoma objeto em string
const clienteString = JSON.stringify(dados);
console.log(clienteString);
console.log(typeof clienteString);

//transforma string em objeto
const objetoCliente = JSON.parse(clienteString);

console.log(objetoCliente);
