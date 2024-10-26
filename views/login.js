const layout = require('./layout');

module.exports = (req, errorMsg) => {
  return layout({
    content: `
         <h3>Login de usuario</h3>

    <div>
            ${errorMsg ? `<p style="color: red;">${errorMsg}</p>` : ''}

      <form action="/login" method="POST">
        <label for="email">Email</label>
        <input type="text" id="email" name="email" placeholder="Your email.."  required/>

        <label for="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Your password.." required/>

        <input type="submit" value="Submit" />
      </form>
    </div>
        
        `
  });
};
