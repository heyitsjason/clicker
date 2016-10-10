const PORT=8080;

var http = require('http'),
    file = require('file'),
    server = http.createServer(handleRequest);

function handleRequest(request, response){
    try {
        var filename = getFilename(request.url),
            contentType = getContentType(filename);

        response.writeHead(200, {'Content-Type': contentType});
        response.end(getPage(filename));
    } catch(err) {
        console.log(err);
    }
};

function getContentType(url) {

    if (url.endsWith('.html')) {
        return 'text/html';
    } else if (url.endsWith('.css')) {
        return 'text/css';
    } else if (url.endsWith('.png')) {
        return 'image/png';
    }

    return 'text/plain';
};

function getFilename(url) {
    url || (url = '');

    if (url.startsWith('/')) {
        url = url.substring(1);
    }

    if (url === '') {
        url = 'resources/index.html';
    }

    return url;
};

function getPage(filename) {
    return file.load(filename);
};

server.listen(PORT, function() {
    console.log("Server listening on: http://localhost:%s", PORT);
});
