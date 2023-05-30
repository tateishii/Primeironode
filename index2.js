//Vamos fazer a importação do modulo hhtp
const http = require ("http");

//Crair o srvidor backend
http.createServer(function(require,responde){
    responde.writeHead(200,{'content-type':'text/plan'});
    //Vamos escrever ao usario
    responde.end("Olá, seja bem vindo!");

}).listen(5028,()=>console.log("Servidor online: http://127.0.0.1:5028"));