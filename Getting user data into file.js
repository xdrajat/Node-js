const http  = require('http');
const fs = require('fs'); 

const server = http.createServer((req,res) => {  
    
    if(req.url=='/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write('<body>');
        res.write('<p>This is first page</p>');
        res.write('<form action="/create-user" method="POST">');
        res.write('<input type="text" name="your-name">');
        res.write('<button type="Submit">Send</button>');
        res.write('</form></body>');
        res.write('</html>');
        return res.end();
    } 
    if(req.url=='/users'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>Assignment 2</title></head>');
        res.write('<body>This is 2nd page</body>');
        res.write('</html>');
        return res.end();  
    }
    if(req.url === '/create-user'){ 
        const body=[]; 
        req.on('data',(chunk)=>{ 
            body.push(chunk); 
        })
        req.on('end',()=>{ 
        const parsedBody=Buffer.concat(body).toString();
        const username=parsedBody; 
        fs.writeFileSync('Names.txt',username);
        })
        res.statusCode=302
        res.setHeader('Location','/')
        return res.end() 
    }
    res.write('No page found');
    res.end();
});

server.listen(3000);
