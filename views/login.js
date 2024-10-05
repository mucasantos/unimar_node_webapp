const layout = require('./layout');

module.exports = (req, res) => {
  console.log(req);
  return layout({
    content: `
         <h3>Login de usuario</h3>

    <div>
      <form action="/login" method="POST">
        <label for="email">Email</label>
        <input type="text" id="email" name="email" placeholder="Your email.." />

        <label for="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Your password.." />

        <input type="submit" value="Submit" />
      </form>
    </div>
        
        `
  });
};
