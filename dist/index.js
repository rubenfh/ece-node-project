"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express"), app = express(), handles = require("./handles"), path = require("path"), metrics = require("./metrics");
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use("/", handles);
app.get("/metrics.json", function (req, res) {
    metrics.get(function (err, data) {
        if (err)
            throw err;
        res.status(200).json(data);
    });
});
var port = 8080;
app.listen(port, function () {
    return console.log("server's listening on http://localhost:" + port);
});
