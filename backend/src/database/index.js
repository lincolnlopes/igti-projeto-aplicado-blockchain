import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../models/User';
import Meeting from '../models/Meeting';
import Issue from '../models/Issue';
import Proof from '../models/Proof';

const models = [User, Meeting, Issue, Proof];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
