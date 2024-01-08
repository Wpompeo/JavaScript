const clientes = require("./clientes.json");

//orderna clientes pela propriedade desejada.
function ordenarClientes(lista, propriedade){
    const resultado = lista.sort((a,b) =>{
        if(a[propriedade] < b[propriedade]){
            return -1;
        }
        if (a[propriedade] > b[propriedade]){
            return 1;
        }
        return 1;
    });
    return resultado;
}

const ordenaNome = ordenarClientes(clientes, "nome");

console.log(ordenaNome);
