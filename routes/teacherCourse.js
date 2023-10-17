var router = require("express").Router();
const { teacherCourseController } = require("../controller/index");
router.post(
  "/createTeachersCourse",
  teacherCourseController.createTeachersCourse
);

module.exports = router;
