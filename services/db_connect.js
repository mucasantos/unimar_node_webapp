//Adicionar o DB ao nosso projeto
const mysql = require('mysql2');
require('dotenv').config();

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
