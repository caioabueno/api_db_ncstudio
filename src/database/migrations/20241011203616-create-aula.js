'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('aula', {
      id_aula: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER },
      nome: { type: Sequelize.STRING(30), allowNull: false},
      descricao: { type: Sequelize.STRING(255), allowNull: true},
      duracao: { type: Sequelize.TIME, allowNull: true},
      id_professor: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'professor', key: 'id_professor'  } },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false },
      deletedAt: { type: Sequelize.DATE, allowNull: true }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('aula');
  }
};