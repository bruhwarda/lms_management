var router = require("express").Router();
const { studentController } = require("../controller/index");
router.get("/getAllStudents", studentController.getStudents);
router.post("/createStudent", studentController.createStudents);

module.exports = router;
