const express = require('express')
const cors = require('cors')
//const { createWorker } = require('tesseract.js')
const app = express()

const port = 3001

app.use(cors())

app.get('/', async (req, res) => {
  // const amountPattern = /rs\.?\s?[0-9]+\.[0-9]*/gim;
  /*const worker = await createWorker({
    logger: m => console.log(m)
  });
  const obj ={};

  (async () => {
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    const { data: { text } } = await worker.recognize('./receipt.png');
    const textArray = text.split(/\n/);
    textArray.forEach((textLine) => {
      te
    });
    console.log(text.split(/\n/));
    res.send(text);
    await worker.terminate();
  })(); */
  res.send('Hello World, Date serve from Node.js server')
})
app.get('/about', (req, res) => {
  res.send('Hey Balasubramani K!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
