const Services = require('./Services.js');

class ProfessorServices extends Services {
  constructor(){
    super('Professor', 'id_professor');
  }
}

module.exports = ProfessorServices;