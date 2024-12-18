const { Router } = require('express');
const GradeAulaController = require('../controller/GradeAulaController.js');
const autenticado = require('../middleware/autenticado.js');

const gradeAulaController = new GradeAulaController();

const router = Router();

router.get('/grade_aulas', (req, res) => gradeAulaController.getAll(req, res));
router.get('/grade_aulas/:id', (req, res) => gradeAulaController.getById(req, res));
router.post('/grade_aulas', autenticado('professor'), (req, res) => gradeAulaController.createNew(req, res));
router.put('/grade_aulas/:id', autenticado('professor'), (req, res) => gradeAulaController.update(req, res));
router.delete('/grade_aulas/:id', autenticado('professor'), (req, res) => gradeAulaController.delete(req, res));

module.exports = router;