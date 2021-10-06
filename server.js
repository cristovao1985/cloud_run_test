const http = require('http');
const server = http.createServer((req,res)=>{
    console.log("");
    res.end('Hello guys');
});

const PORT = process.env.PORT  || 8080;

server.listen(PORT, ()=>{
    console.log('running...')
})
