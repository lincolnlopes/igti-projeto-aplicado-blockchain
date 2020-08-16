import Sequelize, { Model } from 'sequelize';

export default class Meeting extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            ags: [3, 60],
            msg: 'The full name must be between 3 and 32 characters!',
          },
        },
      },
      description: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            ags: [3, 500],
            msg: 'The full name must be between 3 and 500 characters!',
          },
        },
      },
      started_at: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
          isDate: true,
        },
      },
      ended_at: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
          isDate: true,
        },
      },
    }, { sequelize });

    return this;
  }
}
