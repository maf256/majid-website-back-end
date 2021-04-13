const express = require('express')
const app = express()
const mysql      = require('mysql');
const connection = mysql.createConnection({
    host     : '212.16.187.118',
    user     : 'toyenblo_majid-admin',
    password : '4hwJt!A9jLVTKCa',
    database : 'toyenblo_majid-website'
});
const cors = require('cors')

app.use(cors())
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post('/form/save', (req, res) => {
    const formData = req.body;
    const sql = `
        INSERT INTO
            form
        SET
            ?
    `
    connection.query(sql, formData, function (error, results, fields) {
        if (error) {
            res.status(500).jsonp({ error: 'Somthing went wrong!' })
        } else {
            res.status(200).jsonp({ msg: 'Everything went well!' })
        }
    });
})

app.get('/form/save', (req, res) => {
    const sql = `
        SELECT
            *
        FROM
            form
    `
    connection.query(sql, function (error, results, fields) {
        if (error) {
            res.status(500).jsonp({ error: 'Somthing went wrong!' })
        } else {
            res.status(200).jsonp(results)
        }
    });
})

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`)
})