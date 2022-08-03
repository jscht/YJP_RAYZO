'use strict';
module.exports = (sequelize, DataTypes) => {
  var team = sequelize.define('team', {
    member: DataTypes.STRING,
    imag: DataTypes.STRING,
    introduce: DataTypes.STRING
  });

  return team;
};