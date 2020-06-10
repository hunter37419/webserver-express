const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-type': 'Application/json' });
    let cliente = {
            nombre: 'Miguel',
            edad: 32,
            url: '/'
        }
        // res.write("Hola Mundo");
    res.write(JSON.stringify(cliente));
    res.end();
}).listen(8080);

console.log("Escuchando al puerto 8080");