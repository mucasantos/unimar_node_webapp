const Sequelize = require('sequelize'); // terei acesso aos tipos de dado!
const database = require('../services/db_connect'); // Acesso a instancia do meu DB

//Criar um modelo para acessar o meu DB
// id, name, password, email, country

const Produtos = database.define('products', {
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
  type: {
    type: Sequelize.STRING,
    allowNull: false
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = Produtos;
