const { Router } = require('express');
const autenticado = require('../middleware/autenticado.js');
const ProfessorController = require('../controller/ProfessorController.js');
const AlunoController = require('../controller/AlunoController.js');
const AgendamentoController = require('../controller/AgendamentoController.js');
const HistoricoCompraController = require('../controller/HistoricoCompraController.js');

const alunoController = new AlunoController();
const agendamentoController = new AgendamentoController();
const historicoCompraController = new HistoricoCompraController();

const professorController = new ProfessorController();

const router = Router();

router.use(autenticado('professor'));

//rotas protegidas
router.get('/professores', (req, res) => professorController.getAll(req, res));
router.get('/professores/:id', (req, res) => professorController.getById(req, res));
router.post('/professores', (req, res) => professorController.createNew(req, res));
router.put('/professores/:id', (req, res) => professorController.update(req, res));
router.delete('/professores/:id', (req, res) => professorController.delete(req, res));

//rotas de alunos
router.get('/adm/alunos', (req, res) => alunoController.getAll(req, res));
router.get('/adm/alunos/:id', (req, res) => alunoController.getById(req, res));
router.put('/adm/alunos/:id', (req, res) => alunoController.update(req, res));
router.delete('/adm/alunos/:id', (req, res) => alunoController.delete(req, res));

//rotas de histórico de compra
router.get('/adm/historico_compras', (req, res) => historicoCompraController.getAll(req, res));
router.get('/adm/historico_compras/:id', (req, res) => historicoCompraController.getById(req, res));
router.post('/adm/historico_compras', (req, res) => historicoCompraController.createNew(req, res));

//rotas de agendamentos
router.get('/adm/agendamentos', (req, res) => agendamentoController.getAll(req, res));
router.get('/adm/agendamentos/:id', (req, res) => agendamentoController.getById(req, res));
router.post('/adm/agendamentos', (req, res) => agendamentoController.createNew(req, res));
router.put('/adm/agendamentos/:id', (req, res) => agendamentoController.update(req, res));
router.delete('/adm/agendamentos/:id', (req, res) => agendamentoController.delete(req, res));

module.exports = router;