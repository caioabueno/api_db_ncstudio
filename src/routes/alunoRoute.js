const { Router } = require('express');
const autenticado = require('../middleware/autenticado.js');
const AlunoController = require('../controller/AlunoController.js');
const AgendamentoController = require('../controller/AgendamentoController.js');
const HistoricoCompraController = require('../controller/HistoricoCompraController.js');

const alunoController = new AlunoController();
const agendamentoController = new AgendamentoController();
const historicoCompraController = new HistoricoCompraController();

const router = Router();

//rota pública p criação de usuário
router.post('/aluno/', (req, res) => alunoController.createNew(req, res));

router.use(autenticado('aluno'));

//rotas protegidas
router.get('/aluno/:id', (req, res) => alunoController.getById(req, res));
router.put('/aluno/:id', (req, res) => alunoController.update(req, res));
router.delete('/aluno/:id', (req, res) => alunoController.delete(req, res));

//rotas de agendamento
router.get('/aluno/agendamentos/:id', (req, res) => agendamentoController.getById(req, res));
router.post('/aluno/agendamentos', (req, res) => agendamentoController.createNew(req, res));
router.put('/aluno/agendamentos/:id', (req, res) => agendamentoController.update(req, res));
router.delete('/aluno/agendamentos/:id', (req, res) => agendamentoController.delete(req, res));

//rotas de histórico de compra
router.get('/aluno/historico_compras/:id', (req, res) => historicoCompraController.getById(req, res));
//por enquanto o aluno ainda não pode postar na tabela porque quem finaliza a compra de fato é apenas o adm/professor
////router.post('/historico_compras', (req, res) => historicoCompraController.createNew(req, res));



module.exports = router;