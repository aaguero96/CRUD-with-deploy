const express = require('express');
const usersRouter = require('./router/users');

const app = express();

app.get('/', (_, res) => res.json('Bem vindo'))

app.use('/users', usersRouter);

app.listen(3000, () => {
  console.log('Rodando na porta 3000');
})

module.exports = app;