'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    const tx = await queryInterface.sequelize.transaction()


    try {
      await queryInterface.createTable('users',
        {
          userid: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          pin: {
            type: Sequelize.STRING,
          },
          email: {
            type: Sequelize.STRING,
          },
          firstname: {
            type: Sequelize.STRING,
          },
          lastname: {
            type: Sequelize.STRING,
          },
          age: {
            type: Sequelize.INTEGER,
          },
          createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
          },
          updatedAt: {
            type: Sequelize.DATE,
            allowNull: false,
          }
        },

        {
          modelName: 'User',
          tableName: 'users',
          //freezeTableName: true
          transaction: tx
        }
      );

      await tx.commit()

    } catch (err) {
      await tx.rollback()
     throw err;``
    }


  },


  async down(queryInterface, Sequelize) {
    const tx = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.dropTable('users');
      await tx.commit()
    }
    catch (error) {
      await tx.rollback()
      throw error

    }


  }
}
