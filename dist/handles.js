"use strict";
var express = require("express");
var Router = express.Router();
var f_welcome = function () {
    return "\n      <!DOCTYPE html>\n      <html>\n        <head>\n          <meta charset=\"utf-8\" />\n          <title>Welcome !</title>\n        </head>\n        <body>\n          <h1>Welcome !</h1>\n          <p>you can try going to <a href=\"/hello?name=anonymous\" >this page</a> to be welcomed. </br>\n          Or you can enter url to <a href=\"/hello?name=anonymous\" >127.0.0.1:8080/hello?name=name</a> replacing name with your name </p>\n        </body>\n      </html>\n    ";
};
var f_404 = function () {
    return "\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <meta charset=\"utf-8\" />\n        <title>Page not found</title>\n      </head>\n      <body>\n        <h1>Error 404 : Page not found</h1>\n      </body>\n    </html>\n  ";
};
var f_g = function () {
    return "\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <meta charset=\"utf-8\" />\n        <title>Hello Boss</title>\n      </head>\n      <body>\n        <h1>Hello guillaume, you're the designer of this nodejs server</h1>\n      </body>\n    </html>\n  ";
};
Router.get("/", function (req, res) {
    res
        .type("html")
        .status(200)
        .send(f_welcome());
});
Router.get("/hello", function (req, res) {
    if (req.query.name) {
        res.render("hello.ejs", {
            name: req.query.name === "guillaume"
                ? "Guillaume, designer of this page"
                : req.query.name
        });
    }
    else {
        res
            .type("html")
            .status(404)
            .send(f_404());
    }
});
module.exports = Router;
