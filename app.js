const express = require('express')
const port = 3000

const app = express()

app.get('/', (req, res) => {
    res.send("Strona w budowie")
})

app.listen(port)