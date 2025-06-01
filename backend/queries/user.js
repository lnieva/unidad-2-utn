const sequelize = require('../DataBase/conexion.js');

const contact = () => {
    return sequelize.query(
        `SELECT
        c.id,
        ch.userId,
        c.contact,
        c.region,
        c.company,
        c.position,
        ch.comunication,
        c.interet,
        c.email
        FROM contact c
        JOIN channel ch ON  c.id = ch.userId`,
        { type: sequelize.QueryTypes.SELECT }
    )
}

module.exports = {contact}