const { Router } = require('express');
const GradeAulaController = require('../controller/GradeAulaController.js');

const gradeAulaController = new GradeAulaController();

const router = Router();

router.get('/grades_aula', (req, res) => gradeAulaController.getAll(req, res));

module.exports = router;