const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const metascraper = require("metascraper");
const axios = require("axios");
const app = express();

const headers = {
  "Content-Type": "text/event-stream",
  Connection: "keep-alive",
  "Cache-Control": "no-cache",
};
let counter = 0;
let interval;

app.get("/api/meta-scraper", (req, res, next) => {
  res.writeHead(200, headers);
  const data = "hello";
  res.write(data);

  // req is the Node.js http request object
  // console.log(req.query.target);
  // res.writeHead(200, headers);
  // res is the Node.js http response object
  // use metascraper here to scrape metadata

  // axios.get(req.query.target).then((rep) => res.write(rep.data));
  // req.on("close", () => {
  //   res.send(true);
  // });
  // const result = await metascraper({ html: content, url: req.params.target });

  // return res.send(result);
});

module.exports = app;
