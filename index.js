var http = require('http');
http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    res.write('hi Paul how are you today!');
    res.end();
}).listen(process.env.PORT || 3000);