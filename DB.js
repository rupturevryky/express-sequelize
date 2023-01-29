// npm install --save sequelize

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('my_shop', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = { sequelize };