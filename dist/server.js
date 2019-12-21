"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var metrics_1 = require("./metrics");
var app = express(), handles = require("./handles"), path = require("path"), metrics = require("./metrics");
var port = process.env.PORT || "8080";
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use("/", handles);
app.get("/metrics.json", function (req, res) {
    metrics_1.MetricsHandler.get(function (err, result) {
        if (err) {
            throw err;
        }
        res.json(result);
    });
});
app.listen(port, function (err) {
    if (err) {
        throw err;
    }
    console.log("server's listening on http://localhost:" + port);
});
