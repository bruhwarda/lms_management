//importing dbConnection
//here we define schemas
const DataTypes = require("sequelize");
let sequelize = require("../../common/dbConnection");
const teacher_course = sequelize.define(
  "teacher_course",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
  },
  {
    //these are global properties
    sequelize, //instance
    modelName: "teacher_course",
  }
);
module.exports = teacher_course;
