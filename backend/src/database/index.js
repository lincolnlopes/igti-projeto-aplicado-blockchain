import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../models/User';
import Meeting from '../models/Meeting';

const models = [User, Meeting];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
