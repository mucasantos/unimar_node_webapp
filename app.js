/**
 * Utilizar o express para criar API e web services
 * 1. importar o pacote
 * 2. usr o pacote
 * 3. criar as minhas rotas
 */

const express = require('express');
const app = express();
const path = require('path');
const PORT = 3004;

//Informar que tenho uma pasta publica
app.use(express.static('public'));
//Pegar as info do form (urlencoded)
app.use(express.urlencoded({ extended: true }));

//Rotas com express
//Rota get ela envia uma VIEW
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/register', (req, res) => {
  console.log(req.body);

  //Conectar com um DB e salvar o nosso user
  res.end('<html><h1>Registro Efetuado com sucesso!</h1></html>');
});
app.get('/login', (req, res) => {
  res.end('<html><h1>Login Efetuado com sucesso!</h1></html>');
});

//Abrir a  porta e ouvir
app.listen(PORT, () => {
  console.log('Servidor no ar com express na porta: ' + PORT);
});
