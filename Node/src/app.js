import express from "express";
import conectaDataBase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaDataBase();

conexao.on("error", (erro) => {
    console.error("erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso!");
});

const app = express();
routes(app);

//deletar um elemento array
app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro removido com sucesso!");
});

export default app;

