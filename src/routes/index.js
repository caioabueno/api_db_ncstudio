const express = require('express');
const alunos = require('./alunoRoute.js');
const aulas = require('./aulaRoute.js');
const agendamentos = require('./agendamentoRoute.js');
const planos = require('./planoRoute.js');
const professores = require('./professorRoute');
const gradesAula = require('./gradeAulaRoute');

module.exports = app => {
  app.use(
    express.json(),
    alunos,
    aulas,
    agendamentos,
    planos,
    professores,
    gradesAula
  );
}