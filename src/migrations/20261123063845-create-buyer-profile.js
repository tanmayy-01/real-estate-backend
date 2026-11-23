'use strict';
/** @type {import('sequelize-cli').Migration} */
import { COUNTRY_CODES } from '../constants'; 
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('buyer_profiles', {
      buyer_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      country_code: {
        type: Sequelize.ENUM(...COUNTRY_CODES),
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('buyer_profiles');
  }
};