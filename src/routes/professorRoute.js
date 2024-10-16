const { Router } = require('express');
const ProfessorController = require('../controller/ProfessorController.js');

const professorController = new ProfessorController();

const router = Router();

router.get('/professores', (req, res) => professorController.getAll(req, res));

module.exports = router;