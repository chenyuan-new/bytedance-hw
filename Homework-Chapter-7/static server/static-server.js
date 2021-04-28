const http = require('http');
const fs = require('fs');
// const path = require('path');
const url = require('url');

http
    .createServer((req,resp) =>{
        const path = url.parse(req.url,true).pathname;
        const q = url.parse(req.url,true).query;
        const key = Object.keys(q);
        const filename = __dirname + path;
        if(!fs.existsSync(filename)){
            resp.statusCode = 404;
            resp.end();
            return
        }
        if(key.length != 0){
            resp.setHeader('Cache-Control',q[key[0]]);
        }
        fs.createReadStream(filename).pipe(resp);
    })
    .listen(3000,()=>{
        console.log('listening to 3000')
    });