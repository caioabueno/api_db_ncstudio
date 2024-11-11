const express = require('express');
const alunos = require('./alunoRoute.js');
const aulas = require('./aulaRoute.js');
const agendamentos = require('./agendamentoRoute.js');
const planos = require('./planoRoute.js');
const professores = require('./professorRoute');
const gradesAula = require('./gradeAulaRoute');
const historicoCompra = require('./historicoCompraRoute.js');
const login = require('./authRoute.js');

module.exports = app => {
  app.use(
    express.json(),
    aulas,
    planos,
    gradesAula,
    login,
    alunos,
    agendamentos,
    historicoCompra,
    professores
  );
}