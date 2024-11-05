'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Plano extends Model {
    // associações/relações
    static associate(models) {
      Plano.hasMany(models.HistoricoCompra, {
        foreignKey: 'id_plano'
      });
    }
  }
  Plano.init({
    id_plano: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'id_plano'
    },
    tipo: DataTypes.STRING,
    valor: DataTypes.FLOAT,
    qtd_aulas: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Plano',
    tableName: 'plano',
    paranoid: true,
  });
  return Plano;
};