"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const config_1 = require("../config/config");
exports.sequelize = new sequelize_1.Sequelize(config_1.DB_DATABASE, config_1.DB_USERNAME, config_1.DB_PASSWORD, {
    host: config_1.DB_HOST,
    dialect: config_1.DB_DIALECT,
    logging: config_1.LOGGING
});
// const connect = async  ()=> {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }
//  export default connect
