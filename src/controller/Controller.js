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
      return res.status(500).json({ erro: 'Erro ao buscar registro' });
    }
  }

  // async pegaUmPorId(req, res) {
  //   const { id } = req.params;
  //   try {
  //     const umRegistro = await this.entidadeService.pegaUmRegistroPorId(Number(id));
  //     return res.status(200).json(umRegistro);
  //   } catch (erro) {
  //     // erro
  //   }
  // }

  async createNew(req, res) {
    const newRecordData = req.body;
    try {
      const newRecord = await this.entityService.createRecord(newRecordData);
      return res.status(200).json(newRecord);
    } catch (erro) {
      console.error('Erro ao criar registro:', erro);
      return res.status(500).json({ erro: 'Erro ao criar registro' });
    }
  }
}

module.exports = Controller;