
import { Sequelize } from "sequelize";
import { DB_DATABASE, DB_DIALECT, DB_HOST, DB_PASSWORD, DB_USERNAME, LOGGING } from "../config/config";


export const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
  logging: LOGGING
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



