"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./server/server");
var router_1 = require("./router/router");
var http = require("http");
var socketIO = require("socket.io");
var express = require("express");
var path = require("path");
var expressServer = server_1.default.init(8080);
var server = http.createServer(expressServer.app);
var io = socketIO.listen(server);
expressServer
    .app
    .use(router_1.default);
expressServer
    .app
    .use(express.static(path.join(__dirname, 'frontend')));
io.on('connection', function (socket) {
    console.log('new socket connected!');
    socket.on('message', function (message) {
        io.emit('messageFromServer', { message: message });
        console.log(message);
    });
});
server.listen(8080);
//# sourceMappingURL=index.js.map