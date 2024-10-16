const { Router } = require('express');
const PlanoController = require('../controller/PlanoController.js');

const planoController = new PlanoController();

const router = Router();

router.get('/planos', (req, res) => planoController.getAll(req, res));

module.exports = router;