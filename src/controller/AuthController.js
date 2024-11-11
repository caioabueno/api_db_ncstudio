const AuthServices = require('../services/AuthServices')

const authServices = new AuthServices();

class AuthController {
  async login(req, res){
 
    try {
      const { email , senha } = req.body
  
      const login = await authServices.login({email, senha})
  
      res.status(200).send(login)
    } catch (error) {
      res.status(400).send({ message: error.message})
    }
  }

}

module.exports = AuthController;