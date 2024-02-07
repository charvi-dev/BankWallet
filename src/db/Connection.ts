import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('BANK_USER', 'postgres', 'Asdf!234', {
  host: 'localhost',
  dialect:  'postgres', 
  logging:false,

})
const connect = async  ()=> {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
 export default connect



