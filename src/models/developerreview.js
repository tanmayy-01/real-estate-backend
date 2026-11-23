'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DeveloperReview extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DeveloperReview.belongsTo(models.DeveloperProfile, {
        foreignKey: 'developer_id',
        as: 'developerProfile'
      });
      DeveloperReview.belongsTo(models.BuyerProfile, {
        foreignKey: 'buyer_id',
        as: 'buyerProfile'
      });
    }
  }
  DeveloperReview.init({
    developer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    buyer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rating: {
      type: DataTypes.DECIMAL(2, 1),
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
    },
    review_text: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'DeveloperReview',
    tableName: 'developer_reviews',
    underscored: true,
    indexes: [
      {
        unique: true,
        name: 'unique_buyer_developer_review',
        fields: ['buyer_id', 'developer_id']
      }
    ]
  });
  return DeveloperReview;
};