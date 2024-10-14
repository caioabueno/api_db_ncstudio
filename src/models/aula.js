'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Aula extends Model {
    // associações/relações
    static associate(models) {
      Aula.hasMany(models.GradeAula, {
        foreignKey: 'id_aula'
      });
      Aula.belongsTo(models.Professor, {
        foreignKey: 'id_professor'
      });
    }
  }
  Aula.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    duracao: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'Aula',
    tableName: 'aula',
  });
  return Aula;
};