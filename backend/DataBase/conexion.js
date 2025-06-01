require('dotenv').config()

const Sequelize = require('sequelize');
var sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
    logging: true
});

sequelize.authenticate().then(() => {
    console.log('Connection established successfully..');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});
module.exports = sequelize; 