const Services = require('./Services.js');

class HistoricoCompraServices extends Services {
  constructor(){
    super('HistoricoCompra', 'id_historico_compra');
  }
}

module.exports = HistoricoCompraServices;