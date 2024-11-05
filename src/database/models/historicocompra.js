'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HistoricoCompra extends Model {
    static associate(models) {
      HistoricoCompra.belongsTo(models.Aluno, {
        foreignKey: 'id_aluno',    
      });
      HistoricoCompra.belongsTo(models.Plano, {
        foreignKey: 'id_plano',
      });
    }
  }
  HistoricoCompra.init({
    id_historico_compra: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'id_historico_compra'

    },
    aulas_compradas: DataTypes.INTEGER,
    valor_compra: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'HistoricoCompra',
    tableName: 'historico_compra',
    paranoid: true,
  });
  return HistoricoCompra;
};