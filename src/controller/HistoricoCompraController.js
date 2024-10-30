const Controller = require('./Controller.js');
const HistoricoCompraServices = require('../services/HistoricoCompraServices.js');

const historicoCompraServices = new HistoricoCompraServices();

class HistoricoCompraController extends Controller {
  
  constructor() {
    super(historicoCompraServices);
  }

}

module.exports = HistoricoCompraController;