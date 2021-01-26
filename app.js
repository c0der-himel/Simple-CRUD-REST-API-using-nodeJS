/*/
 * Title: Simple-CRUD-REST-API-using-nodeJS
 * Description: Full CRUD REST API using nodeJS with no framework
 * Author: Himel
 * Date: 26/01/2021
/*/

const http = require('http');
const {
  getCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
} = require('./controller/courseController');

const server = http.createServer((req, res) => {
  if (req.url === '/api/courses' && req.method === 'GET') {
    getCourses(req, res);
  } else if (req.url.match(/\/api\/courses\/\w+/) && req.method === 'GET') {
    const id = req.url.split('/')[3];
    getCourse(req, res, id);
  } else if (req.url === '/api/courses' && req.method === 'POST') {
    createCourse(req, res);
  } else if (req.url.match(/\/api\/courses\/\w+/) && req.method === 'PUT') {
    const id = req.url.split('/')[3];
    updateCourse(req, res, id);
  } else if (req.url.match(/\/api\/courses\/\w+/) && req.method === 'DELETE') {
    const id = req.url.split('/')[3];
    deleteCourse(req, res, id);
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
