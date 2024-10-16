const Controller = require('./Controller.js');
const PlanoServices = require('../services/PlanoServices.js');

const planoServices = new PlanoServices();

class PlanoController extends Controller {
  
  constructor() {
    super(planoServices);
  }

}

module.exports = PlanoController;