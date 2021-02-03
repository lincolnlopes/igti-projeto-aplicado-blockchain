import Sequelize, { Model } from 'sequelize';


  export default class Proof extends Model {

    static init(sequelize) {
    super.init({
    block_hash: Sequelize.STRING,
    block_number: Sequelize.INTEGER,
    comulative_gas_used: Sequelize.INTEGER,
    gas_used: Sequelize.INTEGER,
    status: Sequelize.BOOLEAN,
    from: Sequelize.STRING,
    to: Sequelize.STRING,
    transaction_hash: Sequelize.STRING,
    transaction_index: Sequelize.INTEGER,
    issue_id: Sequelize.INTEGER
  }, {
    sequelize,
    modelName: 'proofs',
  });
  return this;
  }
  associate(models) {
    // define association here
      this.belongsTo(models.Issue, { foreignKey: 'issue_id' });
  }
};
