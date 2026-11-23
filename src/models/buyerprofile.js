'use strict';
const {
  Model
} = require('sequelize');
import { COUNTRY_CODES } from '../constants';
module.exports = (sequelize, DataTypes) => {
  class BuyerProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BuyerProfile.belongsTo(models.User, {
        foreignKey: 'buyer_id',
        as: 'user'
      })
    }
  }
  BuyerProfile.init({
    buyer_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    country_code: {
      type: DataTypes.ENUM(...COUNTRY_CODES),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'BuyerProfile',
    tableName: 'buyer_profiles',
    underscored: true
  });
  return BuyerProfile;
};