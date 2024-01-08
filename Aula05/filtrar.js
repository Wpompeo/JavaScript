const clientes = require("./clientes.json");

//filtrar clientes que não possuem complemento quando possuem apartamento
function filtraClientesSemComplemento(clientes){
    return clientes.filter((cliente) =>{
        return (cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento"));
    });
}

const filtrados = filtraClientesSemComplemento(clientes);
console.log(filtrados);