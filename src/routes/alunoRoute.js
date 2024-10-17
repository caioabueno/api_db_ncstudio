const { Router } = require('express');
const AlunoController = require('../controller/AlunoController.js');

const alunoController = new AlunoController();

const router = Router();

router.get('/alunos', (req, res) => alunoController.getAll(req, res));
router.post('/alunos', (req, res) => alunoController.createNew(req, res));

module.exports = router;