//montar um server
//require
const http = require('http');
const PORT = 3004;

const server = http.createServer((req, res) => {
  //ouvir
  console.log(req.url);
  //responder

  console.log(1 === '1'); // tipo e valor

  console.log(req);
  if (req.url === '/login' && req.method === 'POST') {
    res.end('<html><h1>Login Efetuado com sucesso!</h1></html>');
  } else if (req.url === '/register' && req.method === 'POST') {
    res.end('Cadastro efetuado com sucesso');
  } else if (req.url === '/listar' && req.method === 'GET') {
    res.end('<html><h1>Lista dos usuarios...</h1></html>');
  } else {
    res.end('<html><h1>Tente outra rota...!</h1></html>');
  }

  //Fazendo o login e registro
  // Rotas: /login e  /register
});

server.listen(PORT, () => {
  console.log('Servidor no ar...');
});
