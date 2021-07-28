const customExpress = require('./config/customExpress');
const conexao = require('./infraestrutura/conexao');
const Tabelas = require('./infraestrutura/tabelas');

const port = 3000;

conexao.connect((erro) => {
    if(erro) {
        console.log(erro);
    } else {
        console.log('Conectado com sucesso!');

        Tabelas.init(conexao);
        const app = customExpress();
  
        app.listen(port, () => { 
            console.log(`Servidor escutando na URL http://localhost:${port}`);
        })
    }
})

