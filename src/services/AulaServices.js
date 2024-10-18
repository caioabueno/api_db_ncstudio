const Services = require('./Services.js');

class AulaServices extends Services {
  constructor(){
    super('Aula', 'id_aula');
  }
}

module.exports = AulaServices;