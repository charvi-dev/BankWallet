"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestUser = void 0;
const sequelize_1 = require("sequelize");
class User extends sequelize_1.Model {
    static associate(models) {
        // Define associations if needed
    }
}
exports.TestUser = User;
const sequelize = new sequelize_1.Sequelize({
    username: "postgres",
    password: "Asdf!234",
    database: "BANK_USER",
    host: "localhost",
    dialect: "postgres",
});
User.init({
    userid: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    pin: {
        type: sequelize_1.DataTypes.STRING,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
    },
    firstname: {
        type: sequelize_1.DataTypes.STRING,
    },
    lastname: {
        type: sequelize_1.DataTypes.STRING,
    },
    age: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    freezeTableName: true
});
