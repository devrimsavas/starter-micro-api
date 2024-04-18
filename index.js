// Import the http module from Node.js to create a server
const http = require('http');

// Create the HTTP server
http.createServer(function (req, res) {
    // Log the request URL
    console.log(`Just got a request at ${req.url}!`);

    // Send HTTP headers with status 200 (OK) and content type as HTML
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Write an HTML response
    res.write('<!DOCTYPE html>' +
              '<html lang="en">' +
              '<head>' +
              '<meta charset="UTF-8">' +
              '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
              '<title>Greeting to Paul</title>' +
              '</head>' +
              '<body>' +
              '<h1>Hi Paul, how are you today?</h1>' + // Your friendly message to Paul
              '</body>' +
              '</html>');

    // End the response
    res.end();
}).listen(process.env.PORT || 3000);  // The server listens on PORT environment variable or 3000 if not set

console.log('Server running on port 3000');
