const { Router } = require('express');
const AuthController = require('../controller/AuthController');

const authController =  new AuthController();

const router = Router();

router.post('/login', (req, res) => authController.login(req, res));




module.exports = router;