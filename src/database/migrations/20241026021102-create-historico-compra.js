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
      aulas_compradas: { type: Sequelize.INTEGER, allowNull: false },
      valor_compra: { type: Sequelize.FLOAT, allowNull: false },
      id_aluno: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'aluno', key: 'id_aluno' } },
      id_plano: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'plano', key: 'id_plano' } },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false },
      deletedAt: { type: Sequelize.DATE, allowNull: true }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('historico_compra');
  }
};