'use strict';
module.exports = (sequelize, DataTypes) => {
  var major = sequelize.define('major', {
    course: DataTypes.STRING,

    introduce: DataTypes.STRING,

    className: DataTypes.STRING,
  });

  return major;
};