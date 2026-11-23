'use strict';
/** @type {import('sequelize-cli').Migration} */
import { COMPANY_TYPES } from '../constants';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('developer_profiles', {
      developer_id: {
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
      company_name: {
        type: Sequelize.STRING,
        allowNull: true
      },
      registration_number: {
        type: Sequelize.STRING,
        allowNull: false
      },
      type: {
        type: Sequelize.ENUM(...Object.values(COMPANY_TYPES)),
        allowNull: false
      },
      experience_level: {
        type: Sequelize.STRING,
        allowNull: false
      },
      location: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('developer_profiles');
  }
};