const nomes = ["Wagner", "Tati", "Santi"];

nomes.forEach(function (nome){
    console.log(nome);
});

nomes.forEach((nome) =>{
    console.log("Imprimindo nomes por arrowFunction:" + nome);
});

//para utilizar esse trecho, precisa comentar as funcoes de cima.
function imprimeNome(nome){
    console.log(nome);
}
nomes.forEach(imprimeNome);

