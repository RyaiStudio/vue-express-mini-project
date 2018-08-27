var express = require('express')
var _path = require('path')
var app = express()

app.use("/dist", express.static(__dirname + "/dist"))
app.use("/public", express.static(__dirname + "/public"))

app.get("/", function(req, res) {
	res.sendFile(_path.join(__dirname+'/public/index.html'))
})

app.get("/bulma", function(req, res) {
	res.sendFile(_path.join(__dirname+'/public/bulma.html'))
})

var port = 8000
app.listen(port, function(){
	console.log('listening to http://localhost:'+port)
})
