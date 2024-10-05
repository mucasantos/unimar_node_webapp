//ideia basica de middleware
//Verificar uma condicao e avançar ou nao para proxima rota

exports.userLogged = (req, res, next) => {
  if (req.session.userID) {
    next();
  } else {
    res.status(401).send({ msg: 'você precisa fazer login!' });
  }
};
