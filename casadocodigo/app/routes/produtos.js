module.exports = app => {
    // Criando rotas
    app.get('/produtos', (req, res) => {
        const mysql = require('mysql')
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root132',
            database: 'casadocodigo_nodejs'
        })

        connection.query('select * from produtos', (err, results) => {
            res.send(results)
        })

        // res.render('produtos/lista')
        // Fechando conexão
        connection.end()
    })
}
