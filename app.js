const http = require('http');


const server = http.createServer((req, res)=>{
  const path = req.url;

  if (path === '/'){
    res.write()
  }
})