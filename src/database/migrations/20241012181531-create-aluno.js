'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('aluno', {
      id_aluno: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: { type: Sequelize.STRING(60), allowNull: false },
      genero: { type: Sequelize.STRING(20), allowNull: false },
      email: { type: Sequelize.STRING(40), allowNull: false },
      cpf: { type: Sequelize.STRING(11), allowNull: false },
      telefone_principal: { type: Sequelize.STRING(14), allowNull: false },
      telefone_secundario: { type: Sequelize.STRING(14), allowNull: true },
      logradouro: { type: Sequelize.STRING(80), allowNull: false },
      bairro: { type: Sequelize.STRING(50), allowNull: false },
      cidade: { type: Sequelize.STRING(30), allowNull: false },
      estado: { type: Sequelize.STRING(2), allowNull: false },
      data_nascimento: { type: Sequelize.DATE, allowNull: false },
      data_ultima_aula: { type: Sequelize.DATE, allowNull: true },
      aulas_participadas: { type: Sequelize.INTEGER, allowNull: false },
      saldo_aulas: { type: Sequelize.INTEGER, allowNull: false },
      status_matricula: { type: Sequelize.BOOLEAN, allowNull: false },
      senha: { type: Sequelize.STRING(128), allowNull: false},
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false },
      deletedAt: { type: Sequelize.DATE, allowNull: true }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('aluno');
  }
};