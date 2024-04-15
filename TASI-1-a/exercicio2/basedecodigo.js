var http = require(("http"));
var meusdados = require("./dadosestudante")

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    var conteudo = `Nome: ${meusdados.nome}\nSobrenome: ${meusdados.lastnome}\nRGM: ${meusdados.rgm}`;
    res.write(conteudo);
}).listen(8080)