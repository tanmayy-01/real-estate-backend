'use strict';
const {
  Model
} = require('sequelize');
import { DOCUMENT_CATEGORIES, GOV_ID_TYPES, STATUS} from '../constants';
module.exports = (sequelize, DataTypes) => {
  class DeveloperDocument extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DeveloperDocument.belongsTo(models.DeveloperProfile, {
        foreignKey: 'developer_id',
        as: 'developer'
      });
    }
  }
  DeveloperDocument.init({
    developer_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    document_category: {
      type: DataTypes.ENUM(...Object.values(DOCUMENT_CATEGORIES)),
      allowNull: false
    },
    gov_id_type: {
      type: DataTypes.ENUM(...Object.values(GOV_ID_TYPES)),
      allowNull: true
    },
    file_url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    verification_status: {
      type: DataTypes.ENUM(...Object.values(STATUS)),
      allowNull: false
    },
    rejection_reason: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'DeveloperDocument',
    tableName: 'developer_documents',
    underscored: true
  });
  return DeveloperDocument;
};