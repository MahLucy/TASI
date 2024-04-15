var http = require(("http"));
var fs = require("fs")

http.createServer(function (req, res){
    fs.readFile("evylla-29411939-silva.html", function(err, data){
        res.writeHead(200, {"Content-type": "text.html"})
        res.write(data)
        return res.end()
    })
}).listen(8080)