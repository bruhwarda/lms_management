const { models } = require("../models");
module.exports = {
  createTeacherCourse: async (data) => {
    console.log(data); //this basically ensures that jb tk table me data create nhi hojata tbh tk wait kry
    const result = await models.teacher_course.create({ ...data });
    console.log(result);
    return result;
  },
};
