module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('issues', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    summary: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    open_at: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    close_at: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    registered_by: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
      },
    },
    meeting_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'meetings',
        key: 'id',
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
      },
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },

  }),

  down: async (queryInterface) => queryInterface.dropTable('issues'),
};
