const layout = require('./layout');

module.exports = () => {
  return layout({
    content: `
         <h3>Cadastro de usuario</h3>

    <div>
      <form action="/product" method="POST">
        <label for="name">Titulo</label>
        <input type="text" id="title" name="title" placeholder="Titulo Produto" />

        <label for="email">Descricao</label>
        <input type="text" id="description" name="description" placeholder="Descricao" />

        <label for="image">Imagem</label>
        <input type="text" id="image" name="image" placeholder="Url Imagem." />

        

        <input type="submit" value="Submit" />
      </form>
    </div>
        
        `
  });
};
