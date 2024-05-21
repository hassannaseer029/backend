const sequelize = require("../bin/dbConnection");

const users = require("./definition/users");
const tasks = require("./definition/tasks");

const models = { users, tasks };

const db = {};

db.sequelize = sequelize;
sequelize.models = models;


module.exports = { db, models };

