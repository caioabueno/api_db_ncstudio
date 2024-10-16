const { Router } = require('express');
const AlunoController = require('../controller/AlunoController.js');

const alunoController = new AlunoController();

const router = Router();

router.get('/alunos', (req, res) => alunoController.getAll(req, res));

module.exports = router;