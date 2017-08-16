var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;

function handleGoodRequest(request, response) {
    response.end("You are awesome!");
}
var server = http.createServer(handleGoodRequest);

server.listen(PORT1, function() {
    console.log("Server on http://localhost:%s", PORT1);
});