const Services = require('./Services.js');

class AlunoServices extends Services {
  constructor(){
    super('Aluno', 'id_aluno');  // atribui o valor da PK para ser usado nas funções do Services.js
  }
}

module.exports = AlunoServices;