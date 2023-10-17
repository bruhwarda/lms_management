const teacherCourseService = require("../../service/teacherCourseService");
module.exports = {
  createTeachersCourse: async (req, res) => {
    const teachersCourse = await teacherCourseService.createTeacherCourse(
      req.body
    );
    res.send(teachersCourse);
  },
};
