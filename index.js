//Importação do módulo express
const express = require ("express");

//Instância o express como app
const app = express();

//Definir que o express deve lidar com conteudos em json
/*
*Json -> JS(JavaScript) O(On) N(Notation)
    é uma notação em javascript, ou seja, uma







*/
app.use(express.json());

//Vamos criar a primeria nota com a solicitação get
app.get("/",(req,res)=>{
    //Responder ao usuario passando o status code e a mensagem
    res.status(200).send("Olá você está na nota Raiz");

})
app.get("/Clientes/listar",(res,req)=>{
    res.status(200).send(["Marcos", "Sofia", "Theo"]);
})
app.post("/clientes/cadastrar",(req,res)=>{
    console.log(req);
    res.send(2001).send({rs:"Veja os dados enviados", dados:req.bodu});
})

app.listen(5028,()=>console.log("http://127.0.0.1:5028"));