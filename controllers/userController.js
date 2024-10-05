const db = require('../services/db_connect');
const path = require('path');
const bcrypt = require('bcrypt');
const Users = require('../models/user_model');
const { USE } = require('sequelize/lib/index-hints');
const login = require('../views/login');
const userRegister = require('../views/user_register');
const products = require('../views/products');

exports.viewInitialPage = (req, res) => {
  res.send(products());
};
exports.viewUserResgister = (req, res) => {
  res.send(userRegister());
};

exports.viewUserLogin = (req, res) => {
  res.send(login(req));
};

exports.registerUser = async (req, res) => {
  const { name, password, email, country } = req.body;

  //Verificar campos se vieram!
  if (!name || !email || !password || !country) {
    return res.status(400).json({ msg: 'Precisa preencher todos os campos!!' });
  }
  //Antes de criar tem q verificar se existe na base
  const foundUserByEmail = await Users.findOne({ where: { email: email } });

  if (foundUserByEmail) {
    return res.status(400).json({ msg: 'Email ja existe no DB!!' });
  } else {
    bcrypt.hash(password, 10, (err, hash) => {
      Users.password = hash;
      // terei acesso a senha criptografada
      Users.create({
        name: name,
        email: email,
        country: country,
        password: hash
      }).then((user) => {
        user.password = undefined;
        res.send({ msg: 'Usuario criado com sucesso!', user: user });
      });
    });
  }
};
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  //Verificar campos se vieram!
  if (!email || !password) {
    return res.status(400).json({ msg: 'Precisa preencher todos os campos!!' });
  }

  //Antes de criar tem q verificar se existe na base
  const foundUserByEmail = await Users.findOne({ where: { email: email } });

  if (foundUserByEmail) {
    bcrypt.compare(password, foundUserByEmail.password, (err, isIquals) => {
      if (isIquals) {
        req.session.userID = foundUserByEmail.id;
        res.redirect('/home');
      } else {
        res.status(403).json({ msg: 'Email ou senha invalidos...' });
      }
    });
  }
};
