<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Server</title>
</head>
<body>
    <h1>Node.js HTTP Server Demo</h1>
    <p>Open your console to see the server output.</p>
    <script>
        var http = require('http');

        http.createServer(function (req, res) {
            console.log(`Just got a request at ${req.url}!`);
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('Hi Paul, how are you today?');
            res.end();
        }).listen(process.env.PORT || 3000);

        console.log("Server running at http://localhost:3000/");
    </script>
</body>
</html>
