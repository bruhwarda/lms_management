var router = require("express").Router();
const { userController, authController } = require("../controller/index");
router.get("/getUser",authController.authenticateToken, userController.getUsers); //
router.post("/createUser", userController.createUsers);
router.post("/login", authController.login);

module.exports = router;
