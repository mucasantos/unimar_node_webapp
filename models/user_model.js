const Sequelize = require('sequelize'); // terei acesso aos tipos de dado!
const database = require('../services/db_connect'); // Acesso a instancia do meu DB

//Criar um modelo para acessar o meu DB
// id, name, password, email, country

const Users = database.define('usuarios', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  country: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Users;
