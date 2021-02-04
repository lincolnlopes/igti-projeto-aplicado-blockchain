'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('proofs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      block_hash: {
        type: Sequelize.STRING
      },
      block_number: {
        type: Sequelize.INTEGER
      },
      comulative_gas_used: {
        type: Sequelize.INTEGER
      },
      gas_used: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      from: {
        type: Sequelize.STRING
      },
      to: {
        type: Sequelize.STRING
      },
      transaction_hash: {
        type: Sequelize.STRING
      },
      transaction_index: {
        type: Sequelize.INTEGER
      },
      issue_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'issues',
          key: 'id',
          onDelete: 'RESTRICT',
          onUpdate: 'RESTRICT',
        },
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => await queryInterface.dropTable('proofs'),
};
