var router = require("express").Router();
const { teacherController } = require("../controller/index");
router.get("/getAllTeachers", teacherController.getTeachers);
router.post("/createTeachers", teacherController.createTeachers);

module.exports = router;
