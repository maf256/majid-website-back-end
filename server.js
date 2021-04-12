const express = require('express')
const app = express()
const port = 3000
const mysql      = require('mysql');
const connection = mysql.createConnection({
    host     : '212.16.187.118',
    user     : 'toyenblo_majid-admin',
    password : '4hwJt!A9jLVTKCa',
    database : 'toyenblo_majid-website'
});


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post('/', (req, res) => {
    const formData = req.body;
    const sql = `
        INSERT INTO
            form
        SET
            ?
    `
    connection.query(sql, formData, function (error, results, fields) {
        if (error) throw error;
        // connected!
        console.log('results', results);
        console.log('fields', fields);
    });

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})