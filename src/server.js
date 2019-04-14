const express = require('express')
const app = express()
const {
    port,
    env
} = require('./config/vars');

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port} for environment: ${env}!`))
