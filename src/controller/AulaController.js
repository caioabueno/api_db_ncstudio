const Controller = require('./Controller.js');
const AulaServices = require('../services/AulaServices.js');

const aulaServices = new AulaServices();

class AulaController extends Controller {
  
  constructor() {
    super(aulaServices);
  }

}

module.exports = AulaController;