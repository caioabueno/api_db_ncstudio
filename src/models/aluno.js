'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Aluno extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Aluno.init({
    nome: DataTypes.STRING,
    genero: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.STRING,
    telefone_principal: DataTypes.STRING,
    telefone_secundario: DataTypes.STRING,
    logradouro: DataTypes.STRING,
    bairro: DataTypes.STRING,
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING,
    data_nascimento: DataTypes.DATE,
    data_adesao: DataTypes.DATE,
    data_ultima_aula: DataTypes.DATE,
    aulas_participadas: DataTypes.INTEGER,
    status_matricula: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Aluno',
  });
  return Aluno;
};