const Services = require('./Services.js');
const dataSource = require('../database/models');

class AulaServices extends Services {
  constructor(){
    super('Aula', 'id_aula');
  }

  async getAllRecords() {
    return dataSource[this.model].findAll({
      attributes: [
        'id_aula',
        'nome',
        'descricao',
        'duracao',
      ],
      raw: true,
      include: [
      {
        model: dataSource.Professor,
        required: true,
        attributes: ['nome'],
      }]
    });
  }

}

module.exports = AulaServices;