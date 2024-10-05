const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE, process.env.USERDB, process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: 'mysql'
});

module.exports = sequelize;
/*

//Adicionar o DB ao nosso projeto
require('dotenv').config();
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USERDB,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.PORT
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao acessar o DB', err);
  } else {
    console.log('Conectado ao  banco de dados!');
  }
});

module.exports = db;

*/
