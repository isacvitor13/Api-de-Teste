const express = require('express')

const app = express()
app.use(express.json())

app.get('/hello', (req, res) => {
    res.status(200).json({ message: 'Hello Word!' })
})

app.listen(3000, () => console.log('Rodando'))