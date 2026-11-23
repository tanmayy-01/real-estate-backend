'use strict';
const {
  Model
} = require('sequelize');
import { COMPANY_TYPES } from '../constants';
module.exports = (sequelize, DataTypes) => {
  class DeveloperProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DeveloperProfile.belongsTo(models.User, {
        foreignKey: 'developer_id',
        as: 'user'
      })
    }
  }
  DeveloperProfile.init({
    developer_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    company_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    registration_number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM(...Object.values(COMPANY_TYPES)),
      allowNull: false
    },
    experience_level: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'DeveloperProfile',
    tableName: 'developer_profiles',
    underscored: true
  });
  return DeveloperProfile;
};