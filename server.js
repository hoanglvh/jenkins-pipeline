let http = require("http");
let port = 3000;

http.createServer((req, res) => {
    res.writeHead(200, {'content-Type': 'text/plain'});
    res.write('Hello');
    res.end();
}).listen(port, () => {
    console.log(' server is running at http://localhost:%d', port);
    console.log(' Press CTRL-C to stop\n');
});