const http = require('http');
const express = require('express');
const bodyparser = require("body-parser");
const app = express();


const server = http.createServer((req,res)=>{
    console.log("");
    res.end('Hello guys');
});

const PORT = process.env.PORT  || 8080;

server.listen(PORT, ()=>{
    console.log('running...')
})

app.use(bodyparser.json({ limit: "50mb" }));

const carRoute = require("./routes/car");

app.use("/api/car", carRoute);