const Services = require('./Services.js');
const bcrypt = require('bcrypt');

class AlunoServices extends Services {
  constructor(){
    super('Aluno', 'id_aluno');  // atribui o valor da PK para ser usado nas funções do Services.js
  }

async createRecord(recordData) {
  // Criptografa a senha antes de criar o registro
  if (recordData.senha) {
    recordData.senha = await bcrypt.hash(recordData.senha, 8);
  } 
  // Chama a função `createRecord` da classe mãe para o registro
  return super.createRecord(recordData);
}
}


module.exports = AlunoServices;