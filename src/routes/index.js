const express = require('express');
const alunos = require('./alunoRoute.js')

module.exports = app => {
  app.use(
    express.json(),
    alunos,
  );
}