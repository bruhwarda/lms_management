var router = require("express").Router();
const { userController } = require("../controller/index");
router.get("/getUser", userController.getUsers);
router.post("/createUser", userController.createUsers);

module.exports = router;
