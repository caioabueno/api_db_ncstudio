const Services = require('./Services.js');

class AgendamentoServices extends Services {
  constructor(){
    super('Agendamento', 'id_agendamento');
  }

   //ainda não ta funcionando
  // async getAll() {
  //   // select personalizado da tabela agendamento
    
  //   const options = {
  //     include: [
  //       {
  //         model: dataSource.Aluno,
  //         as: 'aluno',
  //         attributes: ['nome'] // Selecionando apenas a coluna 'nome' do Aluno
  //       },
  //       {
  //         model: dataSource.GradeAula,
  //         as: 'gradeAula',
  //         include: [ //associação dentro da outra
  //           {
  //             model: dataSource.Aula,
  //             as: 'aula',
  //             attributes: ['nome'] // Selecionando apenas a coluna 'nome' da Aula
  //           }
  //         ],
  //         attributes: ['horario'] // Selecionando apenas a coluna 'horario' de GradeAula
  //       }
  //     ],
  //     attributes: ['data', 'status'] // Selecionando as colunas específicas do Agendamento
  //   };

  //   return this.getAllRecords(options);
  // }

}

module.exports = AgendamentoServices;
