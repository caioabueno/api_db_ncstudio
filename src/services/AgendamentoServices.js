const Services = require('./Services.js');
const dataSource = require('../database/models');
const { raw } = require('mysql2');

class AgendamentoServices extends Services {
  constructor(){
    super('Agendamento', 'id_agendamento');
  }

  async getAllRecords() {
    return dataSource[this.model].findAll({
      attributes: ['data','status'],
      raw: true,
      include: [
      {
        model: dataSource.Aluno,
        required: true,
        attributes: ['nome'],
      },
      {
        model: dataSource.GradeAula,
        require: true,
        attributes: ['horario'],
        include: [{
          model: dataSource.Aula,
          require: true,
          attributes: ['nome'],
        }]
      }]
    });
  }


}

module.exports = AgendamentoServices;
