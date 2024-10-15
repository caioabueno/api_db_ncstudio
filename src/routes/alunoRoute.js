const { Router } = require('express');
const AlunoController = require('../controller/AlunoController.js');

const router = Router();

router.get('/aluno', AlunoController.getAll);

module.exports = router;