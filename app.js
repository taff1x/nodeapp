const express = require('express')
const port = 80

const app = express()

app.get('/', (req, res) => {
    res.send("Strona SOFTaff jest w budowie, bo Dziubisiowa paczy")
})

app.listen(port)