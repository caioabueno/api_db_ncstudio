require('dotenv').config(); // pra utilizar as variáveis de ambiente em toda a aplicação
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
routes(app);

module.exports = app;