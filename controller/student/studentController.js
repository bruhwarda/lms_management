const studentService = require("../../service/studentService");
module.exports = {
  getStudents: async (req, res) => {
    const data = await studentService.getStudents();
    res.send(data);
  },
  createStudents: async (req, res) => {
    const students = await studentService.createStudents(req.body);
    res.send(students);
  },
};
