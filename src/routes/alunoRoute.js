const { Router } = require('express');
const AlunoController = require('../controller/AlunoController.js');
const autenticado = require('../middleware/autenticado.js');

const alunoController = new AlunoController();

const router = Router();

router.use(autenticado)

router.get('/alunos', (req, res) => alunoController.getAll(req, res));
router.get('/alunos/:id', (req, res) => alunoController.getById(req, res));
router.post('/alunos', (req, res) => alunoController.createNew(req, res));
router.put('/alunos/:id', (req, res) => alunoController.update(req, res));
router.delete('/alunos/:id', (req, res) => alunoController.delete(req, res));


module.exports = router;