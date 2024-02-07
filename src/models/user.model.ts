import { Model, DataTypes, Sequelize, CreateOptions } from 'sequelize';
import { DB_DATABASE, DB_DIALECT, DB_HOST, DB_PASSWORD, DB_USERNAME, LOGGING } from "../config/config";
interface UserAttributes {
  userid: number;
  pin: string;
  email: string;
  firstname: string;
  lastname: string;
  age: number;
  createdAt: Date;
  updatedAt: Date;
}

export type UserCreateAttributes = Omit<UserAttributes, 'userid' | 'createdAt' | 'updatedAt'>

class User extends Model<UserAttributes, UserCreateAttributes> {
  public userid!: number;
  public pin!: string;
  public email!: string;
  public firstname!: string;
  public lastname!: string;
  public age!: number;
  public createdAt!: Date;
  public updatedAt!: Date;

  static associate(models: any) {
    // Define associations if needed
  }
}

 const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
  logging: LOGGING
});



User.init({
  userid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  pin: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
  },
  firstname: {
    type: DataTypes.STRING,
  },
  lastname: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.INTEGER,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'User',
  tableName: 'users',
  freezeTableName: true
});

export { User };



