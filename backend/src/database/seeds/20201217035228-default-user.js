'use strict';
const bcrypt = require('bcryptjs')
//import bcrypt from 'bcryptjs';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    //const temp = await bcrypt.hash('123456', 8)
     await queryInterface.bulkInsert('users', [{
       fullname: 'Lincoln Lopes',
       email: 'lincolnlopes@msn.com',
       password_hash : await bcrypt.hash('123456', 8),//temp,
       enrollment : "AA000001",
       quota : "1",
       created_at: new Date(),
       updated_at: new Date()
      }], {});
     //await queryInterface.bulkCreate()
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
