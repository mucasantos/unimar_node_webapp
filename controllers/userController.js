const db = require('../services/db_connect');
const path = require('path');
const bcrypt = require('bcrypt');
const Users = require('../models/user_model');
const Produtos = require('../models/products_model');

exports.viewInitialPage = (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'home.html'));
};
exports.viewUserResgister = (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
};

exports.viewUserLogin = (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'login.html'));
};

exports.registerUser = (req, res) => {
  const { name, password, email, country } = req.body;

  //Verificar campos se vieram!
  if (!name || !email || !password || !country) {
    return res.status(400).json({ msg: 'Precisa preencher todos os campos!!' });
  }

  //Regra de negocio => o usuario pode ter o mesmo nome no entanto, o email precisa ser [unico]

  const checkEmailQuery = 'SELECT email FROM usuarios WHERE email =  ?';
  db.query(checkEmailQuery, [email], (err, results) => {
    if (err) {
      return res.status(500).json({ msg: 'Erro ao pesquisar no   DB...!!', error: err });
    }

    if (results.length > 0) {
      return res.status(400).json({ msg: 'Email ja existe no DB!!' });
    }
    const insertUserQuery =
      'INSERT INTO usuarios  (name,  password, email,country) VALUES (?,?,?,?)';

    //Criptografar a senha e depois salvar no DB!

    bcrypt.hash(password, 10, (err, hash) => {
      // terei acesso a senha criptografada

      db.query(insertUserQuery, [name, hash, email, country], (err, results) => {
        if (err) {
          console.log(err);
          res.send('<html><h1>Erro ao salvar usuario no DB!!</h1></html>');
        } else {
          console.log(results);

          res.send('<html><h1>Registro Efetuado com sucesso!</h1></html>');
        }
      });
    });
  });
};
exports.loginUser = (req, res) => {
  const { email, password } = req.body;

  //Verificar campos se vieram!
  if (!email || !password) {
    return res.status(400).json({ msg: 'Precisa preencher todos os campos!!' });
  }

  //Toda hora preciso digitar os comandos SQL...
  const getAllUsers = 'SELECT * FROM usuarios WHERE email = ?';

  db.query(getAllUsers, [email], (err, results) => {
    if (err) {
      return res.status(500).json({ msg: 'Erro ao pesquisar no   DB...!!', error: err });
    }

    if (results.length === 0) {
      return res.status(400).json({ msg: 'Email nao existe no DB!!' });
    }

    const user = results[0];
    console.log(user.password);

    bcrypt.compare(password, user.password, (err, isIquals) => {
      if (isIquals) {
        req.session.userID = user.id;
        res.redirect('/home');
      } else {
        res.status(403).json({ msg: 'Email ou senha invalidos...' });
      }
    });
  });
};
