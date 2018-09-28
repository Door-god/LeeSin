const express = require('express')
const app = express()
const routes = require('./routes')(app)
app.use(express.static(__dirname + '/dist'))




const server = app.listen(8080, () => {
    var port = server.address().port
    console.log('Example app listening at http://%s:%s', 'localhost', port)
});