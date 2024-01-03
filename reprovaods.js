const alunos = ["Wagner", "Tati", "Santago", "Frida"];

const medias = [7, 8.5, 8, 5];

const reprovados = alunos.filter((_, indice) => {
    return medias[indice] < 7;
});

console.log("Sua média ficou abaixo de 7 " + reprovados );