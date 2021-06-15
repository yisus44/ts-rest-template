"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var PORT = Number(process.env.PORT) || 3000;
app_1.app.listen(3000, function () {
    console.log('Server up and running on port', PORT);
});
