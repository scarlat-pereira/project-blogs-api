const express = require('express');
const router = require('./routers');
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

// ...
app.use('/login', router.routerLogin);
app.use('/user', router.routerUser);
app.use('/categories', router.routerCategory);
app.use('/post', router.routerPost);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;