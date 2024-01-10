import http from "http";

//definicao de porta comunicacao
const PORT = 3000;

const rotas = {
    "/": "Curso de Node.js",
    "/livros": "Entrei na rota livros.",
    "/autores": "Entrei na rota autores."
};

//criando requisicao http cabecalho e resposta
const server = http.createServer((req, res) =>{
    res.writeHead(200, { "Content-Type": "text/plain"});
    res.end(rotas[req.url]);
});
//metodo de ouvir, porta de comunicacao e mensagem de reposta.
server.listen(PORT, () =>{
    console.log("servidor escutando!");
});