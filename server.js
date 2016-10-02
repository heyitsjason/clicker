const PORT=8080;

var http = require('http'),
    file = require('file'),
    server = http.createServer(handleRequest);

function handleRequest(request, response){
    try {
        var contentType = getContentType(request.url),
            filename = getFilename(request.url);

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
    }

    return 'text/plain';
};

function getFilename(url) {

    if (url.startsWith('/')) {
        return url.substring(1);
    }

    return url;
};

function getPage(filename) {
    return file.load(filename);
};

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});
