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
require('dotenv').config();
const app = express();
const cookieSession = require('cookie-session');
const {
  registerUser,
  loginUser,
  viewUserResgister,
  viewUserLogin,
  viewInitialPage
} = require('./controllers/userController');
const { userLogged } = require('./middlewares/user_is_logged');

const PORT = 3004;

//Informar que tenho uma pasta publica
app.use(express.static('public'));
//Pegar as info do form (urlencoded)
app.use(express.urlencoded({ extended: true }));
//Adicionar o middleware de cookie-session
app.use(cookieSession({ keys: [process.env.SECRET] }));

//Rotas com express
//Rota get ela envia uma VIEW
app.get('/home', userLogged, viewInitialPage);
app.get('/register', viewUserResgister);
app.post('/register', registerUser);
app.get('/login', viewUserLogin);
app.post('/login', loginUser);

//Abrir a  porta e ouvir
app.listen(PORT, () => {
  console.log('Servidor no ar com express na porta: ' + PORT);
});
