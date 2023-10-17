const teacherService = require("../../service/teacherService");
module.exports = {
  getTeachers: async (req, res) => {
    const data = await teacherService.getTeachers();
    res.send(data);
  },
  createTeachers: async (req, res) => {
    const students = await teacherService.createTeachers(req.body);
    res.send(students);
  },
};
