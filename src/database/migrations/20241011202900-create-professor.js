'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('professor', {
      id_professor: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER },
      nome: { type: Sequelize.STRING(60), allowNull: false },
      cpf: { type: Sequelize.STRING(11), allowNull: false },
      telefone_principal: { type: Sequelize.STRING(14), allowNull: false },
      telefone_secundario: { type: Sequelize.STRING(14), allowNull: true },
      email: { type: Sequelize.STRING(40), allowNull: true },
      logradouro: { type: Sequelize.STRING(80), allowNull: true },
      bairro: { type: Sequelize.STRING(50), allowNull: true },
      cidade: { type: Sequelize.STRING(30), allowNull: true },
      estado: { type: Sequelize.STRING(2), allowNull: true },
      senha: { type: Sequelize.STRING(128), allowNull: false},
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false },
      deletedAt: { type: Sequelize.DATE, allowNull: true }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('professor');
  }
};