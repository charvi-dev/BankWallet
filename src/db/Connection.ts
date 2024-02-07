
import { Sequelize } from "sequelize";
import { DB_DATABASE, DB_DIALECT, DB_HOST, DB_PASSWORD, DB_USERNAME, LOGGING } from "../config/config";


export const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
  logging: LOGGING
});




