const Controller = require('./Controller.js');
const AgendamentoServices = require('../services/AgendamentoServices.js');

const agendamentoServices = new AgendamentoServices();

class AgendamentoController extends Controller {
  
  constructor() {
    super(agendamentoServices);
  }

}

module.exports = AgendamentoController;