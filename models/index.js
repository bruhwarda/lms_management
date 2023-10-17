//we define relation between these tables
// const DataTypes = require("sequelize");
let sequelize = require("../common/dbConnection");
let user = require("./defination/user");
let student = require("./defination/student");
let course = require("./defination/course");
let teacher = require("./defination/teacher");
let teacher_course = require("./defination/teacher_course");
const models = {
  user,
  student,
  course,
  teacher,
  teacher_course,
};
//cascade will delete child too when parent will be deleted
//when we define relations we also tell the belongTo also
//the foreign key for student table
user.hasOne(student, {
  onDelete: "CASCADE",
});
//student belong to user
student.belongsTo(user, {
  onDelete: "CASCADE",
});

//one to many
student.hasMany(course, {
  onDelete: "CASCADE",
});
course.belongsTo(student, {
  onDelete: "CASCADE",
});

//many to many
teacher.belongsToMany(course, {
  through: teacher_course,
});
course.belongsToMany(teacher, {
  through: teacher_course,
});

//all the models will be returned
sequelize.models = models;
console.log(models);
const db = {};
//db.sequelize is a key
db.sequelize = sequelize;
module.exports = { db, models };
