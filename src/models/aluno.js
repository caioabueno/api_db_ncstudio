'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Aluno extends Model {
    // associações/relações
    static associate(models) {
      Aluno.belongsTo(models.Plano, {
        foreignKey: 'id_plano'
      });
      Aluno.hasMany(models.Agendamento, {
        foreignKey: 'id_aluno'
      });
    }
  }
  Aluno.init({
    id_aluno: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'id_aluno'
    },
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
    tableName: 'aluno',
    timestamps: false,
  });
  return Aluno;
};