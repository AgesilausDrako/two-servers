var http = require("http");

var PORTONE = 8080;
var PORTTWO = 7500;

var goodArray = ["You are crushing it!",
                    "Awesome!"];

var badArray = ["You suck!",
                "You are terrible!"]

var goodComment = goodArray[Math.floor(Math.random() * goodArray.length)];

var badComment = badArray[Math.floor(Math.random() * badArray.length)];

function handleGoodRequest(request, response) {
    response.end(goodComment);
}
var serverOne = http.createServer(handleGoodRequest);

serverOne.listen(PORTONE, function() {
    console.log("Server on http://localhost:%s", PORTONE);
});

function handleBadRequest(request, response) {
    response.end(badComment);
}

var serverTwo = http.createServer(handleBadRequest);

serverTwo.listen(PORTTWO, function() {
    console.log("Server on http://localhost:%s", PORTTWO);
}); 