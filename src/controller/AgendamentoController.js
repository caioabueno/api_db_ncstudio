const Controller = require('./Controller.js');
const AgendamentoServices = require('../services/AgendamentoServices.js');

const agendamentoServices = new AgendamentoServices();

class AgendamentoController extends Controller {
  
  constructor() {
    super(agendamentoServices);
  }

  //não ta funcionando ainda
  // async getAll(req, res) {
  //   try {
  //     const listaAgendamentos = await this.entityService.this.getAllAgendamentos();
  //     return res.status(200).json(listaAgendamentos);
  //   } catch (erro) {
  //     console.error('Erro ao buscar agendamentos', erro);
  //     return res.status(500).json({ erro: 'Erro ao buscar agendamentos' });
  //   }
  // }

}

module.exports = AgendamentoController;