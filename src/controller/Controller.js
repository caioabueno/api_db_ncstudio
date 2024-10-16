class Controller {
  
  constructor(entityService){
    this.entityService = entityService;
  }
  
  async getAll(req, res) {
    try {
      const listaRecords = await this.entityService.getAllRecords()
      return res.status(200).json(listaRecords);
    } catch(erro) {
      console.error('Erro ao buscar alunos:', erro);
      return res.status(500).json({ erro: 'Erro ao buscar alunos' });
    }
  }
}

module.exports = Controller;