const fs = require('fs');
const http = require('http');

const port = process.env.PORT || 9001;

const server = http.createServer((req, res) => {
  // console.log(req.url);
  res.statusCode = 200; // response is OK
  res.setHeader('Content-Tye', 'text/html');

  if(req.url == '/') {
    res.statusCode = 200;
    const data = fs.readFileSync('index.html');
    res.end(data.toString());
  }
  else if (req.url == '/about') {
    res.statusCode = 200;
    res.end('<h1> This is About Kashiiitech...</h1><p>Hey this is the way to rock the world!! In the About section</p>');
  }
  else if (req.url == '/hello') {
    res.statusCode = 200;
    res.end('<h1> This is Kashiiitech...</h1><p>Hey this is the way to rock the world!!</p>');
    
  }


  else {
    res.statusCode = 404;
    res.end('<h1> Not Found..</h1>');
  }
  
  
})

server.listen(port, ()=>{
  console.log(`Server is listening on port ${port}`);
});