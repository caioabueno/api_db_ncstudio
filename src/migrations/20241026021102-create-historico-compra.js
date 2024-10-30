'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('historico_compra', {
      id_historico_compra: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      aulas_compradas: {
        type: Sequelize.INTEGER
      },
      valor_compra: {
        type: Sequelize.FLOAT
      },
      id_aluno: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'aluno', key: 'id_aluno' },
      },
      id_plano: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'plano', key: 'id_plano' },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('historico_compra');
  }
};