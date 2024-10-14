'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Agendamento extends Model {
    // associações/relações
    static associate(models) {
      Agendamento.belongsTo(models.GradeAula, {
        foreignKey: 'id_grade_aula'
      });
      Agendamento.belongsTo(models.Aluno, {
        foreignKey: 'id_aluno'
      });
    }
  }
  Agendamento.init({
    data: DataTypes.DATE,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Agendamento',
    tableName: 'agendamento',
  });
  return Agendamento;
};