const { Router } = require('express');
const AulaController = require('../controller/AulaController.js');

const aulaController = new AulaController();

const router = Router();

router.get('/aulas', (req, res) => aulaController.getAll(req, res));
router.get('/aulas/:id', (req, res) => aulaController.getById(req, res));
router.post('/aulas', (req, res) => aulaController.createNew(req, res));
router.put('/aulas/:id', (req, res) => aulaController.update(req, res));
router.delete('/aulas/:id', (req, res) => aulaController.delete(req, res));

module.exports = router;