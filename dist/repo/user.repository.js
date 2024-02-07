"use strict";
// import pool from '../db/Connection'; 
// import { QueryResult } from 'pg';
// class CreateUser {
//     async addUser(
//       //USER_ID: number,
//       PIN: string,
//       EMAIL: string,
//       FIRST_NAME: string,
//       LAST_NAME: string,
//       AGE: number
//     ) {
//       console.log(arguments)
//       try {
//         const res:QueryResult = await pool.query(
//           "insert into USER_INFO(PIN, EMAIL, FIRST_NAME, LAST_NAME, AGE) values ($1,$2,$3,$4,$5)",
//           [ PIN, EMAIL, FIRST_NAME, LAST_NAME, AGE]
//         );
//         console.log('USER CREATED successfuly');
//       } catch (err) {
//           console.log('USER NOT CREATED!');
//           console.log(err);
//       }
//     }
//   }
//   export const createUser= new CreateUser();
