const Produtos = require('../models/products_model');
const product_add = require('../views/product_add');

exports.createProduct = async (req, res) => {
  const { title, image, description } = req.body;

  console.log(req.body);

  //Verificar campos se vieram!
  if (!title || !image || !description) {
    return res.status(400).json({ msg: 'Precisa preencher todos os campos!!' });
  }

  Produtos.create(req.body);

  res.send({ msg: 'ok' });
};

exports.viewAddProducts = (req, res) => {
  res.send(product_add());
};

//Criar o controler para mostrar todos os produtos e enviar esta lista de produtos para a tela
