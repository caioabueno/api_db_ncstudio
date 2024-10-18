const { Router } = require('express');
const AgendamentoController = require('../controller/AgendamentoController.js');

const agendamentoController = new AgendamentoController();

const router = Router();

router.get('/agendamentos', (req, res) => agendamentoController.getAll(req, res));
router.get('/agendamentos/:id', (req, res) => agendamentoController.getById(req, res));
router.post('/agendamentos', (req, res) => agendamentoController.createNew(req, res));
router.put('/agendamentos/:id', (req, res) => agendamentoController.update(req, res));
router.delete('/agendamentos/:id', (req, res) => agendamentoController.delete(req, res));

module.exports = router;