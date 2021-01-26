const { v4: uuidv4 } = require('uuid');
let courses = require('../data/courses.json');
const { writeDataToFile } = require('../utility/utility');

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

const create = (course) => {
  return new Promise((resolve, reject) => {
    const newCourse = { id: uuidv4(), ...course };
    courses.push(newCourse);
    writeDataToFile('./data/courses.json', courses);
    resolve(newCourse);
  });
};

const update = (id, course) => {
  return new Promise((resolve, reject) => {
    const index = courses.findIndex((item) => item.id === id);
    courses[index] = { id, ...course };
    writeDataToFile('./data/courses.json', courses);
    resolve(courses[index]);
  });
};

const remove = (id, course) => {
  return new Promise((resolve, reject) => {
    courses = courses.filter((item) => item.id !== id);
    writeDataToFile('./data/courses.json', courses);
    resolve();
  });
};

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove,
};
