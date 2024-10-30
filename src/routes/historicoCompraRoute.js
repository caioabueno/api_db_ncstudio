const { Router } = require('express');
const HistoricoCompraController = require('../controller/HistoricoCompraController.js');

const historicoCompraController = new HistoricoCompraController();

const router = Router();

router.get('/historico_compras', (req, res) => historicoCompraController.getAll(req, res));
router.get('/historico_compras/:id', (req, res) => historicoCompraController.getById(req, res));
router.post('/historico_compras', (req, res) => historicoCompraController.createNew(req, res));


module.exports = router;