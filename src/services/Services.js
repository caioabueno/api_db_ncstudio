const { options } = require('../app');
const dataSource = require('../models')

class Services {
  constructor(modelName){
    this.model = modelName;
  }

  async getAllRecords() {
    return dataSource[this.model].findAll();
  }

  async createRecord(recordData) {
    return dataSource[this.model].create(recordData);
  }

}

module.exports = Services;