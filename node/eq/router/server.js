//import { request } from "http";

const http = require("http");
const url = require("url");
// const route = require("router");
// const express = require("express");
start = () => {
  Request = (request, response) => {
    let pathname = url.parse(request.url).pathname;
    console.log(pathname);
    // route(pathname);
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("hello world\n bb");
  };
  http.createServer(Request).listen(8000);
  console.log("server running at http://127.0.0.1:8888/");
};

exports.start = start;
