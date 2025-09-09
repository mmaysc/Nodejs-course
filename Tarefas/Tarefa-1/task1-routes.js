const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        //res.write('<head><tittle>Tarefa 1 </tittle></head>');
        res.write('<body><h1>Seja bem vindo!</h1></body>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Create user</button></form></body>');
        res.write('</html>');
        return res.end();
    };

    if (url === '/users') {
        res.write('<html>');
        res.write('<body>');
        res.write('<h1>Users</h1>');
        res.write('<ul>');
        res.write('<li>Joan</li>');
        res.write('<li>Maria</li>');
        res.write('<li>Carlos</li>');
        res.write('<li>Anna</li>');
        res.write('<li>Pedro</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    }

    if (url === '/create-user' && method === 'POST') {
        let body = [];
        req.on('data', chunk => {
            // console.log(chunk) => chunk é uma parte fragmentada do código do tipo Buffer (dado em binário). 
            // Se em uma requisição os dados forem muito grandes a requisição manda os dados em "pedaços" menores (os chunks). 
            body.push(chunk);
        });
        return req.on('end', () => {
            body = Buffer.concat(body).toString();
            const username = new URLSearchParams(body).get('username');

            if (typeof username === 'string') {
                console.log('Username: ', username);
            } else {
                console.log('Username is not a string');
                return res.end();
            }

            res.writeHead(302, { 'Location': '/'});
            return res.end();
        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
};

exports.handler = requestHandler;
