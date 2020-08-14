import Sequelize, { Model } from 'sequelize';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      fullname: Sequelize.STRING,
      email: Sequelize.STRING,
      enrollment: Sequelize.STRING,
      quota: Sequelize.FLOAT,
    }, { sequelize });
    return this;
  }
}
