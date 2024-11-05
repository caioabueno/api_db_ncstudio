const dataSource = require('../database/models')

class Services {
  constructor(modelName, primaryKey){
    this.model = modelName;
    this.primaryKey = primaryKey;
  }

  async getAllRecords() {
    return dataSource[this.model].findAll();
  }

  async getRecordById(id) {
    return dataSource[this.model].findOne({
      where: { [this.primaryKey] : id } //associa o nome da primaryKey dinamicamento com o id do argumento
    });
  }

  async createRecord(recordData) {
    return dataSource[this.model].create(recordData);
  }

  async updateRecord(updatedData, id) {
    const updatedRecordsArray = dataSource[this.model].update(updatedData, {
      where: { [this.primaryKey] : id }
    });
    if (updatedRecordsArray[0] === 0) {
      return false;
    }
    return true;
    //método retorna true ou false p/ fazer a verificação se o registro foi atualizado ou não no controller
  }

  async deleteRecord(id) {
    return dataSource[this.model].destroy({ where: { [this.primaryKey] : id } });
  }

}

module.exports = Services;