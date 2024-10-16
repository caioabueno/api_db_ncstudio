const database = require('../models')

class AlunoController {
  static async getAll(req, res){
    try {
      const listaAlunos = await database.Aluno.findAll();
      return res.status(200).json(listaAlunos);
    } catch(erro) {
      console.error('Erro ao buscar alunos:', erro);
      return res.status(500).json({ erro: 'Erro ao buscar alunos' });
    }

  }
}

module.exports = AlunoController;