const layout = require('./layout');

module.exports = () => {
  return layout({
    content: `
         <h3>Cadastro de usuario</h3>

    <div>
      <form action="/register" method="POST">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your name.." />

        <label for="email">Email</label>
        <input type="text" id="email" name="email" placeholder="Your email.." />

        <label for="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Your password.." />

        <label for="country">Country</label>
        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
          <option value="brazil">Brazil</option>
        </select>

        <input type="submit" value="Submit" />
      </form>
    </div>
        
        `
  });
};
