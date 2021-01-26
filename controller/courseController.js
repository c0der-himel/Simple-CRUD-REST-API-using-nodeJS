const Courses = require('../model/courseModel');

// @desc    Get All Courses
// @routes  GET /api/courses
const getCourses = async (req, res) => {
  try {
    const courses = await Courses.findAll();

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(courses));
  } catch (err) {
    console.log(err);
  }
};

// @desc    Get Single Course
// @routes  GET /api/courses
const getCourse = async (req, res, id) => {
  try {
    const course = await Courses.findById(id);

    if (!course) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(
        JSON.stringify({
          message: 'Course Not Found',
        })
      );
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(course));
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getCourses,
  getCourse,
};
