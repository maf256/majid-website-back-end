
const express = require('express')
const app = express()
const port = 3000
const pgp = require('pg-promise')()
const db = pgp({ database: 'majid-website' })


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post('/', (req, res) => {
    saveFormData(req.body)
    .then((data) => {
        console.log(data);
        res.json(data)
    })
})

function saveFormData(formData) {
    const {name, email, subject, description} = formData;

    const sql = `
        INSERT INTO
            form(name, email, subject, description)
        VALUES
            ($1, $2, $3, $4)
        RETURNING
            *
    `

    return db.any(sql, [name, email, subject, description])
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})