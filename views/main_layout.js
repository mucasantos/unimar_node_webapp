module.exports = ({ content }) => {
  return `
<!DOCTYPE html>
<html>
  <head>
    <title>W3.CSS Template</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Karma" />
    <style>
      body,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: 'Karma', sans-serif;
      }
      .w3-bar-block .w3-bar-item {
        padding: 20px;
      }
    </style>
  </head>
  <body>
    <!-- Sidebar (hidden by default) -->
    ${content}
  </body>
</html>
    
    `;
};
