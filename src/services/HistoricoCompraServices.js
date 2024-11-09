const Services = require('./Services.js');
const dataSource = require('../database/models');

class HistoricoCompraServices extends Services {
  constructor(){
    super('HistoricoCompra', 'id_historico_compra');
  }
//preciso corrigir
  async getAllRecords() {
    return dataSource[this.model].findAll({
      attributes: ['aulas_compradas','valor_compra'],
      raw: true,
      include: [
      {
        model: dataSource.Aluno,
        required: true,
        attributes: ['nome','cpf'],
      }]
    });
  }

}

module.exports = HistoricoCompraServices;