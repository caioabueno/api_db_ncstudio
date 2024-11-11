const Services = require('./Services.js');
const bcrypt = require('bcrypt');

class ProfessorServices extends Services {
  constructor(){
    super('Professor', 'id_professor');
  }

  async createRecord(recordData) {
    
    if (recordData.senha) {
      recordData.senha = await bcrypt.hash(recordData.senha, 8);
    } 

    return super.createRecord(recordData);
  }
}

module.exports = ProfessorServices;