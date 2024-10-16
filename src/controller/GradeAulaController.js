const Controller = require('./Controller.js');
const GradeAulaServices = require('../services/GradeAulaServices.js');

const gradeAulaServices = new GradeAulaServices();

class GradeAulaController extends Controller {
  
  constructor() {
    super(gradeAulaServices);
  }

}

module.exports = GradeAulaController;