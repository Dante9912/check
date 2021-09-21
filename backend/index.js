const express = require('express');
const app = express()
const port = 3000
const path = require('path');
const dotenv = require('dotenv')
const morgan = require('morgan')
const fs = require("fs")
const { routes } = require('./routes')
const { meta } = require('./tagss')
dotenv.config()
app.use(express.json())
app.use(express.static('public'))

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

routes.map((route) => {
   app.get(route, (req, res) => {
    const myFile = fs.readFileSync("../frontend/build/index.html", "utf8")
    let data = {}
    if (route in meta) {
      data = meta[route]
    }
    else {
      data = meta['/']
    }
    const toHydrate = myFile.replace("__title__", data.title).replace("__description__", data.description).replace("__image__", data.image)
    res.send(toHydrate)
  });
})
app.use(express.static(path.join(__dirname, '../frontend/build')))
app.get('*', (req, res) => {
  const myFile = fs.readFileSync("../frontend/build/index.html", "utf8")
  let data = {}
  data = meta['/']
  const toHydrate = myFile.replace("__title__", data.title).replace("__description__", data.description).replace("__image__", data.image)
  res.send(toHydrate)
  res.sendFile(path.resolve(__dirname, '../frontend', 'build', 'index.html'))
}
)


const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
)