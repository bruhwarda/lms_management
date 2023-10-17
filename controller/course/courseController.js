const courseService = require("../../service/courseService");
module.exports = {
  getCourse: async (req, res) => {
    const data = await courseService.getCourse();
    res.send(data);
  },
  createCourses: async (req, res) => {
    const students = await courseService.createCourses(req.body);
    res.send(students);
  },
};
