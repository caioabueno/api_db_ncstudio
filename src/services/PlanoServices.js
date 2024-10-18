const Services = require('./Services.js');

class PlanoServices extends Services {
  constructor(){
    super('Plano', 'id_plano');
  }
}

module.exports = PlanoServices;