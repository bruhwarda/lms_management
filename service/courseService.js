const { models } = require("../models");
module.exports = {
  getCourse: async () => {
    const result = await models.course.findAll({
      include: [
        {
          model: models.student,
        },
      ],
    }); // jb tk data sara how na ho agly py na jaye
    return result;
  },
  createCourses: async (data) => {
    console.log(data); //this basically ensures that jb tk table me data create nhi hojata tbh tk wait kry
    const result = await models.course.create({ ...data });
    console.log(result);
    return result;
  },
};
