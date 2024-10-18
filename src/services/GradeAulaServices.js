const Services = require('./Services.js');

class GradeAulaServices extends Services {
  constructor(){
    super('GradeAula', 'id_grade_aula');
  }
}

module.exports = GradeAulaServices;