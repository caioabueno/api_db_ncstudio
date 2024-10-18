const { Router } = require('express');
const PlanoController = require('../controller/PlanoController.js');

const planoController = new PlanoController();

const router = Router();

router.get('/planos', (req, res) => planoController.getAll(req, res));
router.get('/planos/:id', (req, res) => planoController.getById(req, res));
router.post('/planos', (req, res) => planoController.createNew(req, res));
router.put('/planos/:id', (req, res) => planoController.update(req, res));
router.delete('/planos/:id', (req, res) => planoController.delete(req, res));

module.exports = router;