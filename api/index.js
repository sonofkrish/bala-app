const express = require('express')
const cors = require('cors')
const app = express()

const port = 3001

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World, Date serve from Node.js server')
})
app.get('/about', (req, res) => {
  res.send('Hey Balasubramani K!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
