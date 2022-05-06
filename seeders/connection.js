const sequelize = require('sequelize');

const sequelize = new Sequelize("sequelize", "root", "jagadish24",{
    dialect:"mysql2",
    host:"localhost",
});

module.exports = sequelize;