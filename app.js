var express = require('express')
var app = express()
var _ = require('lodash')

app.data = {}
app.data.experience = require('./data/experience.json').data
app.data.projects = require('./data/projects.json').data
app.data.references = require('./data/references.json').data
app.data.skills = require('./data/skills.json').data

// use jade as the view engine
app.set('view engine', 'jade')

// set where the static contents are (e.g., css, js)
app.use(express.static(__dirname + '/public'))

// default to index
app.get('/', function(req, res) {
    res.render('index.jade')
})

require('./routes/skills')(app)
require('./routes/experience')(app)


app.set('port', (process.env.PORT || 3000))

var server = app.listen(app.get('port'), function() {

    var host = server.address().address
    var port = server.address().port
    console.log('App listening at http://%s:%s', host, port)
})