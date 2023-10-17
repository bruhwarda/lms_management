var router = require("express").Router();
const { courseController } = require("../controller/index");
router.get("/getAllCourse", courseController.getCourse);
router.post("/createCourse", courseController.createCourses);

module.exports = router;
