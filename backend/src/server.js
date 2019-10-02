const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

// mongoose key here

// req.query = acessar query params (para filtros)
// req.params = acessar route params (para edição, delete)
// req.body = acessar o corpo da requisição (para criar e editar)

app.use(express.json());
app.use(routes);


app.listen(3333);