const { Router } = require('express');
const ProfessorController = require('../controller/ProfessorController.js');

const professorController = new ProfessorController();

const router = Router();

router.get('/professores', (req, res) => professorController.getAll(req, res));
router.get('/professores/:id', (req, res) => professorController.getById(req, res));
router.post('/professores', (req, res) => professorController.createNew(req, res));
router.put('/professores/:id', (req, res) => professorController.update(req, res));
router.delete('/professores/:id', (req, res) => professorController.delete(req, res));

module.exports = router;