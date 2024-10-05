/**
 * Utilizar o express para criar API e web services
 * 1. importar o pacote
 * 2. usr o pacote
 * 3. criar as minhas rotas
 * 4. expor  uma pasta publica
 * 5. expor o arquivo
 * 6. conectar ao DB => preciso da dep mysql2
 */

const express = require('express');
const app = express();
const {
  registerUser,
  loginUser,
  viewUserResgister,
  viewUserLogin,
  viewInitialPage
} = require('./controllers/userController');

const PORT = 3004;

//Informar que tenho uma pasta publica
app.use(express.static('public'));
//Pegar as info do form (urlencoded)
app.use(express.urlencoded({ extended: true }));

//Rotas com express
//Rota get ela envia uma VIEW
app.get('/initial', viewInitialPage);
app.get('/register', viewUserResgister);
app.post('/register', registerUser);
app.get('/login', viewUserLogin);
app.post('/login', loginUser);

//Abrir a  porta e ouvir
app.listen(PORT, () => {
  console.log('Servidor no ar com express na porta: ' + PORT);
});
