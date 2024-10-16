const Controller = require('./Controller.js');
const AlunoServices = require('../services/AlunoServices.js');

const alunoServices = new AlunoServices();

class AlunoController extends Controller {
  
  constructor() {
    super(alunoServices);
  }

}

module.exports = AlunoController;