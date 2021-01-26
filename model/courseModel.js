const courses = require('../data/courses.json');

const findAll = () => {
  return new Promise((resolve, reject) => {
    resolve(courses);
  });
};

const findById = (id) => {
  return new Promise((resolve, reject) => {
    const course = courses.find((item) => item.id === id);
    resolve(course);
  });
};

module.exports = {
  findAll,
  findById,
};
