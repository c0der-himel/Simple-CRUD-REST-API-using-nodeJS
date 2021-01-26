const http = require('http');
const { getCourses, getCourse } = require('./controller/courseController');

const server = http.createServer((req, res) => {
  if (req.url === '/api/courses' && req.method === 'GET') {
    getCourses(req, res);
  } else if (
    req.url.match(/\/api\/courses\/([0-9]+)/) &&
    req.method === 'GET'
  ) {
    const id = req.url.split('/')[3];
    getCourse(req, res, id);
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
