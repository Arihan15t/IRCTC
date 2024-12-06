const Sequelize = require("sequelize");

// replace with your database name and password
// here, i have used "irctc" as database, "postgres" as username and "arihant" as password
const sequelize = new Sequelize("irctc", "postgres", "arihant", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;