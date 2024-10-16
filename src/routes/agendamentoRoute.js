const { Router } = require('express');
const AgendamentoController = require('../controller/AgendamentoController.js');

const agendamentoController = new AgendamentoController();

const router = Router();

router.get('/agendamentos', (req, res) => agendamentoController.getAll(req, res));

module.exports = router;