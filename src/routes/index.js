const express = require('express');
const alunos = require('./alunoRoute.js');
const aulas = require('./aulaRoute.js');
const planos = require('./planoRoute.js');
const professores = require('./professorRoute');
const gradesAula = require('./gradeAulaRoute');
const login = require('./authRoute.js');

module.exports = app => {
  app.use(
    express.json(),
    aulas,
    planos,
    gradesAula,
    login,
    alunos,
    professores,
  );
}