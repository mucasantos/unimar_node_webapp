const db = require('../services/db_connect');
const path = require('path');
const bcrypt = require('bcrypt');
const Users = require('../models/user_model');
const { USE } = require('sequelize/lib/index-hints');
const login = require('../views/login');
const userRegister = require('../views/user_register');
const products = require('../views/products');
const Produtos = require('../models/products_model');

exports.viewInitialPage = async (req, res) => {
  //Vou ao DB, pego todos os produtos e envio para tela de produtos!
  //1. Pego os produtos no DB
  const produtos = await Produtos.findAll(); //1ms ...

  //2. Envio os produtos para a nossa view
  //renderiza a tela de produtos
  res.send(products(produtos));
};
exports.viewUserResgister = (req, res) => {
  res.send(userRegister());
};

exports.viewUserLogin = (req, res) => {
  const errorMsg = req.query.error || null;

  //Renderizo a minha tela de login
  res.send(login(req, errorMsg));
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

  console.log(req.body);

  //Verificar campos se vieram!
  //Esta validação seria por segurança, caso o front nao adicione
  if (!email || !password) {
    return res.status(400).json({ msg: 'Precisa preencher todos os campos!!' });
  }

  //Antes de criar tem q verificar se existe na base
  const foundUserByEmail = await Users.findOne({ where: { email: email } });

  if (foundUserByEmail) {
    bcrypt.compare(password, foundUserByEmail.password, (err, isIquals) => {
      if (isIquals) {
        req.session.userID = foundUserByEmail.id;

        //login com sucesso, nos leva para a pagina home
        return res.redirect('/home');
      } else {
        return res.redirect('/login?error=Usuário ou senha incorretos');
      }
    });
  } else {
    return res.redirect('/login?error=Usuário não encontrado...');
  }
};
