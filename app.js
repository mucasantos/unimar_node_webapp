/**
 * Utilizar o express para criar API e web services
 * 1. importar o pacote
 * 2. usr o pacote
 * 3. criar as minhas rotas
 */

const express = require('express');
const app = express();
const PORT = 3004;

//Informar que tenho uma pasta publica
app.use(express.static('public'));

//Rotas com express
//Rota get ela envia uma VIEW
app.get('/register', (req, res) => {
  res.end(`
    <!DOCTYPE html>
<html>
<style>
input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 60%;
  margin:0 auto;
}
</style>
<body>

<h3>Cadastro de usuario</h3>

<div>
  <form action="/register" method="POST">
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name..">

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name..">

    <label for="country">Country</label>
    <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>
  
    <input type="submit" value="Submit">
  </form>
</div>

</body>
</html>
    `);
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
