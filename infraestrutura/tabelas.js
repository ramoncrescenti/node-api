class Tabelas {
    init(conexao){
        this.conexao = conexao;

        this.criarOrcamento();
    }

    criarOrcamento() {
        const sql = 'CREATE TABLE IF NOT EXISTS Orcamentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, produto varchar(20), quantity int NOT NULL, data datetime NOT NULL, dataCriacao datetime NOT NULL, obs text, PRIMARY KEY(id))'

        this.conexao.query(sql, (erro) => {
            if(erro) {
                console.log(erro);
            } else {
                console.log('Tabela Orcamentos criada com sucesso!');
            }
        })
    }
}

module.exports = new Tabelas;