'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GradeAula extends Model {
    // associações/relações
    static associate(models) {
      GradeAula.belongsTo(models.Aula, {
        foreignKey: 'id_aula'
      });
      GradeAula.hasMany(models.Agendamento, {
        foreignKey: 'id_agendamento'
      });
    }
  }
  GradeAula.init({
    dia_semana: DataTypes.STRING,
    horario: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'GradeAula',
    tableName: 'grade_aula',
  });
  return GradeAula;
};