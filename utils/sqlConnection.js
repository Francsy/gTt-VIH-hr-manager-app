const { Sequelize } = require('sequelize');
require('dotenv').config()


/*
CONEXIÓN: ELEPHANT;
const db = new Sequelize(`postgres://${process.env.SQL_ELEPHANT_USER}:${process.env.SQL_ELEPHANT_PASSWORD}@${process.env.SQL_ELEPHANT_HOST}/${process.env.SQL_ELEPHANT_USER}`);
 */

// CONEXIÓN GOOGLE CLOUD:

const db = new Sequelize(`${process.env.SQL_DATABASE_NAME}`, `${process.env.SQL_USER}`, `${process.env.SQL_PASSWORD}`, {
    host: `${process.env.SQL_HOST}`,
    port: 5432, // El puerto predeterminado de PostgreSQL es 5432, cámbielo si es necesario
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
    pool: {
        max: 5,
        min: 0,
        idle: 10000,
        acquire: 30000
    }
});






const connectSQL = async () => {
    try {
        await db.authenticate();
        console.log('SQL database connected...');
    } catch (error) {
        console.error('Unable to connect to SQL database:', error);
    }
};

connectSQL();


module.exports = {
    connectSQL,
    db
}