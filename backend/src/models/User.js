import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      fullname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            ags: [3, 60],
            msg: 'The full name must be between 6 and 32 characters!',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          isEmail: {
            msg: 'E-mail invalid!',
          },
        },
      },
      password_hash: { type: Sequelize.STRING, defaultValue: '' },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            ags: [6, 32],
            msg: 'Password must be between 6 and 32 characters!',
          },
        },
      },
      enrollment: Sequelize.STRING,
      quota: Sequelize.FLOAT,
    }, { sequelize, modelName: 'users' });

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        // eslint-disable-next-line no-param-reassign
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });
    return this;
  }

  passwordIsValid(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}
