'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GradeAula extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GradeAula.init({
    dia_semana: DataTypes.STRING,
    horario: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'GradeAula',
  });
  return GradeAula;
};