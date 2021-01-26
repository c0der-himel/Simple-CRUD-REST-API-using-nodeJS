const Courses = require('../model/courseModel');
const { getPostData } = require('../utility/utility');

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
// @routes  GET /api/courses/:id
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

// @desc    Create a Course
// @routes  POST /api/courses
const createCourse = async (req, res) => {
  try {
    const body = await getPostData(req);
    const { courseName, author, description } = JSON.parse(body);
    const course = {
      courseName,
      author,
      description,
    };
    const newCourse = await Courses.create(course);

    res.writeHead(201, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(newCourse));
  } catch (err) {
    console.log(err);
  }
};

// @desc    Update a Course
// @routes  PUT /api/courses/:id
const updateCourse = async (req, res, id) => {
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
      const body = await getPostData(req);
      const { courseName, author, description } = JSON.parse(body);
      const courseData = {
        courseName: courseName || course.courseName,
        author: author || course.author,
        description: description || course.description,
      };
      const updCourse = await Courses.update(id, courseData);

      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify(updCourse));
    }
  } catch (err) {
    console.log(err);
  }
};

// @desc    Delete Course
// @routes  DELETE /api/courses/:id
const deleteCourse = async (req, res, id) => {
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
      await Courses.remove(id);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(
        JSON.stringify({
          message: `Course ${id} Removed`,
        })
      );
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
};
