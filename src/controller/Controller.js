class Controller {
  
  constructor(entityService){
    this.entityService = entityService;
  }
  
  async getAll(req, res) {
    try {
      const listaRecords = await this.entityService.getAllRecords()
      return res.status(200).json(listaRecords);
    } catch(erro) {
      console.error('Erro ao buscar registros:', erro);
      return res.status(500).json({ erro: 'Erro ao buscar registros' });
    }
  }

  async getById(req, res) {
    const { id } = req.params;
    try {
      const singleRecord = await this.entityService.getRecordById(Number(id));
      return res.status(200).json(singleRecord);
    } catch (erro) {
      console.error('Erro ao buscar registro:', erro);
      return res.status(500).json({ erro: 'Erro ao criar registro' });
    }
  }

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

  async update(req, res) {
    const { id } = req.params;
    const updatedData = req.body;
    try {
      //isUpdated recebe booleano pela função updateRecord
      const isUpdated = await this.entityService.updateRecord(updatedData, Number(id));
      //negando isUpdated (not true) para verificar se o registro não foi atualizado
      if (!isUpdated) {
        return res.status(400).json({ mensagem: 'registro não foi atualizado' });
      }
      return res.status(200).json({ mensagem: 'Atualizado com sucesso' });
    } catch (erro) {
      console.error('Erro ao atualizar registro:', erro);
      return res.status(500).json({ erro: 'Erro ao atualizar registro' });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      await this.entityService.deleteRecord(Number(id));
      return res.status(200).json({ mensagem: `id ${id} deletado` });
    } catch (error) {
      console.error('Erro ao deletar registro:', erro);
      return res.status(500).json({ erro: 'Erro ao deletar registro' });
    }
  }
}

module.exports = Controller;