module.exports = {
  //basically exporting all the elements used
  userController: require("./user/userController"),
  studentController: require("./student/studentController"),
  courseController: require("./course/courseController"),
  teacherController: require("./teacher/teacherController"),
  teacherCourseController: require("./teacher_course/teacherCourseController"),
  authController: require("../controller/common/authenticationController"),

  //require work as import that we use in react
};
