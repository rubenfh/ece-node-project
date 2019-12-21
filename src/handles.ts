const express = require("express");
const Router = express.Router();

const f_welcome = () => {
  return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <title>Welcome !</title>
        </head>
        <body>
          <h1>Welcome !</h1>
          <p>you can try going to <a href="/hello?name=anonymous" >this page</a> to be welcomed. </br>
          Or you can enter url to <a href="/hello?name=anonymous" >127.0.0.1:8080/hello?name=name</a> replacing name with your name </p>
        </body>
      </html>
    `;
};

const f_404 = () => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Page not found</title>
      </head>
      <body>
        <h1>Error 404 : Page not found</h1>
      </body>
    </html>
  `;
};



Router.get("/", (req: any, res: any) => {
  res
    .type("html")
    .status(200)
    .render("hello.ejs")
});

Router.get("/hello", (req: any, res: any) => {
  if (req.query.name) {
    res.render("hello.ejs", {
      name:
        req.query.name === "ruben"
          ? "ruben, designer of this page"
          : req.query.name
    });
  } else {
    res
      .type("html")
      .status(404)
      .send(f_404());
  }
});
module.exports = Router;
