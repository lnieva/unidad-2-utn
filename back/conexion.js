require('dotenv').config()

const Sequelize = require('sequelize');
//const path = 'mysql://root@127.0.0.1:3306/dwh';
//const sequelize = new Sequelize(path, {operatorsAliases:0});
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  port: process.env.DB_PORT,
//  logging: true
  logging: (msg) => console.debug('[Sequelize]', msg)
});

sequelize.authenticate().then(() => {
    console.log('Connection established successfully..');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

module.exports = sequelize;