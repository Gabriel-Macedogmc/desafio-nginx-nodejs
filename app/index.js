const express = require('express')
const app = express()
const port = 3000
const config = {
    host: "db",
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const mysql = require('mysql');
const connection = mysql.createConnection(config);

const sql = `INSERT INTO people(name) values('Gabriel')`
const peoples = []
const errors = []

connection.query(sql)
connection.query(`SELECT * FROM people`, (error, results, fileds) => {
    for (const result of results) {
        peoples.push(result.name)
    }
})
connection.end()

app.get('/', (req, res) => {
    res.send(
        `<h1>Full Cycle</h1>
    - Peoples: ${JSON.stringify(peoples)}
    </br>
    - Errors: ${errors}`
    )
})

app.listen(port, () => console.log(`Rodando na Porta: ${port}`))