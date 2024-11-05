'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('agendamento', {
      id_agendamento: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER },
      data: { type: Sequelize.DATE, allowNull: false },
      status: { type: Sequelize.STRING(10), allowNull: false },
      id_grade_aula: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'grade_aula', key: 'id_grade_aula'  } },
      id_aluno: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'aluno', key: 'id_aluno'  } },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false },
      deletedAt: { type: Sequelize.DATE, allowNull: true }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('agendamento');
  }
};