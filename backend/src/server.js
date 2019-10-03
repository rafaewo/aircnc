const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();

// mongo key here


// req.query = acessar query params (para filtros)
// req.params = acessar route params (para edição, delete)
// req.body = acessar o corpo da requisição (para criar e editar)

app.use(cors())
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);