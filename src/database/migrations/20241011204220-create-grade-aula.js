'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('grade_aula', {
      id_grade_aula: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER },
      dia_semana: { type: Sequelize.STRING(13), allowNull: false },
      horario: { type: Sequelize.TIME, allowNull: false },
      id_aula: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'aula', key: 'id_aula'  } },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE },
      deletedAt: { type: Sequelize.DATE, allowNull: true }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('grade_aula');
  }
};