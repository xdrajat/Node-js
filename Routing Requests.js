const http = require('http');

const server = http.createServer((req,res)=>{

    const url=req.url;
    if(url==='/'){
        res.write('<html><body><form action="/message" method="POST"><input type="text"></input><button type="sumbit">Send</button></form></body></html>');
        return res.end();
    }
    res.write("B");
    res.end();
 
});

server.listen(3000);
