import Sequelize, { Model } from 'sequelize';

export default class Issue extends Model {
  static init(sequelize) {
    super.init({
      summary: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Field cannot be empty!',
          },
        },
      },
      description: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Field cannot be empty',
          },
        },
      },
      open_at: {
        type: Sequelize.DATE,
        defaultValue: null,
        allowNull: true,
        validate: {
          isDate: true,
        },
      },
      close_at: {
        type: Sequelize.DATE,
        defaultValue: null,
        allowNull: true,
        validate: {
          isDate: true,
        },
      },
    }, { sequelize });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Issue, { foreignKey: 'registered_by' });
    this.belongsTo(models.Issue, { foreignKey: 'meeting_id' });
  }
}
