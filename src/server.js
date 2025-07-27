const express = require('express')
const router = require('./router/router')
const app = express()

app.use(router)

app.listen(3333, () => {
  console.log('server running at http://localhost:3333')
})
