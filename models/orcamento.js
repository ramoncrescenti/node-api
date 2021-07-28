const moment = require('moment');
const conexao = require('../infraestrutura/conexao');

class Orcamento {
    adiciona(orcamento) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS');
        const data = moment(orcamento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');
        const orcamentoDatado = {...orcamento, dataCriacao, data};
        const sql = 'INSERT INTO Orcamentos SET ?'

        conexao.query(sql, orcamentoDatado, (erro, resultados) => {
            if(erro) {
                console.log(erro);
            } else {
                console.log(resultados);
            }
        })
    }
}

module.exports = new Orcamento;