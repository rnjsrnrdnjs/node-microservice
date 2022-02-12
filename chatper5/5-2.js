const http = require("http");
const url = require("url");
const querystring = require("querystring");

const members=require('./monolithic_members.js');
const goods=require('./monolithic_goods.js');
const purchases=require('./monolithic_purchases.js');

const server = http
  .createServer((req, res) => {
    const method = req.method;
    const uri = url.parse(req.url, true);
    const pathname = uri.pathname;

    if (method === "post" || method === "put") {
      let body = "";

      req.on("data", function (data) {
        body += data;
      });
      req.on("end", function () {
        let params = "";
        if (req.headers["content-type"] == "application/json") {
          params = JSON.parse(body);
        } else {
          params = querystring.parse(body);
        }
        onRequest(res, method, pathname, params);
      });
    } else {
      onRequest(res, method, pathname, uri.query);
    }
  })
  .listen(8000);

function onRequest(res, method, pathname, params) {

    switch(pathname){
        case
    }
  res.end("response");
}
