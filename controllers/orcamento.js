const Orcamento = require('../models/orcamento');

module.exports = app => {

    app.get('/form', (req, res) => {
        res.send('Fazendo um GET nesse form !');
    })

    app.post('/form', (req, res) => {
        const orcamento = req.body;
        Orcamento.adiciona(orcamento);
        res.send('POST orçamento');
    })
}