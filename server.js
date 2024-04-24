const express = require('express')
const app = express()

app.use(express.static('static')) //tells express that all files inside the static folder will be made available once the server is started
app.listen(3000, () => { console.log('Server stated at port 3000')} )