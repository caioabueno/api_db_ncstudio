const { Router } = require('express');
const AulaController = require('../controller/AulaController.js');

const aulaController = new AulaController();

const router = Router();

router.get('/aulas', (req, res) => aulaController.getAll(req, res));

module.exports = router;