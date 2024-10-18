const { Router } = require('express');
const GradeAulaController = require('../controller/GradeAulaController.js');

const gradeAulaController = new GradeAulaController();

const router = Router();

router.get('/grades_aula', (req, res) => gradeAulaController.getAll(req, res));
router.get('/grades_aula/:id', (req, res) => gradeAulaController.getById(req, res));
router.post('/grades_aula', (req, res) => gradeAulaController.createNew(req, res));
router.put('/grades_aula/:id', (req, res) => gradeAulaController.update(req, res));
router.delete('/grades_aula/:id', (req, res) => gradeAulaController.delete(req, res));

module.exports = router;