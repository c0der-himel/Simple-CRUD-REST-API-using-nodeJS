const http = require('http');
const courses = require('./data/courses.json');

const server = http.createServer((req, res) => {
  if (req.url === '/api/courses' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(courses));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify({
        message: 'Route not Found',
      })
    );
  }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
