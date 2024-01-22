import "dotenv/config";
import app from "./src/app.js";


//definicao de porta comunicacao
const PORT = 3000;

app.listen(PORT, () =>{
    console.log("servidor escutando!");
});