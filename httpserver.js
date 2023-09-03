const http = require('http');

const port = process.env.PORT || 9000;

const server = http.createServer((req, res) => {
  // console.log(req.url);
  res.statusCode = 200; // response is OK
  res.setHeader('Content-Tye', 'text/html');
  res.end('<h1> This is Kashiiitech...</h1><p>Hey this is the way to rock the world!!</p>');
})

server.listen(port, ()=>{
  console.log(`Server is listening on port ${port}`);
});