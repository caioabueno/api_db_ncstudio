'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Professor extends Model {
    // associações/relações
    static associate(models) {
      Professor.hasMany(models.Aula, {
        foreignKey: 'id_professor'
      });
    }
  }
  Professor.init({
    id_professor: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'id_professor'
    },
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
    tableName: 'professor',
    paranoid: true,
  });
  return Professor;
};