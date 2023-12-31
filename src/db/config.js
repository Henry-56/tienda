const Sequelize = require('sequelize');

const database = process.env.DB_NAME || 'buhpwwqxkzxngjuv2onu';
const username = process.env.DB_USERNAME || 'uywe2ymixcrcd8zs';
const password = process.env.DB_PASSWORD || 'EwE6ZSAKwFrR24yDuvwP';
const host = process.env.DB_HOST || 'buhpwwqxkzxngjuv2onu-mysql.services.clever-cloud.com';
const dialect = process.env.DB_DIALECT || 'mysql';

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: dialect,
  dialectOptions: {
    ssl: {
      require: true, // Require SSL/TLS
      rejectUnauthorized: false // Accept self-signed certificates
    }
  }
});

sequelize
  .authenticate()
  .then(() => console.log('Conectado a la base de datos con éxito.'))
  .catch(err => console.log('No se ha podido conectar: ', err));

module.exports = sequelize;
