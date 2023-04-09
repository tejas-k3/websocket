const http = require("http");

const httpserver = http.createServer((req, res) => {
    console.log("Request received!");
})