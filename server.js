var http = require("http");

var PORTONE = 8080;
var PORTTWO = 7500;

function handleGoodRequest(request, response) {
    response.end("You are awesome!");
}
var serverOne = http.createServer(handleGoodRequest);

serverOne.listen(PORTONE, function() {
    console.log("Server on http://localhost:%s", PORTONE);
});

function handleBadRequest(request, response) {
    response.end("You are terrible!");
}

var serverTwo = http.createServer(handleBadRequest);

serverTwo.listen(PORTTWO, function() {
    console.log("Server on http://localhost:%s", PORTTWO);
}); 