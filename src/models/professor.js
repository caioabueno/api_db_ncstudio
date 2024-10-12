'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Professor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Professor.init({
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    telefone_principal: DataTypes.STRING,
    telefone_secundario: DataTypes.STRING,
    email: DataTypes.STRING,
    logradouro: DataTypes.STRING,
    bairro: DataTypes.STRING,
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Professor',
  });
  return Professor;
};