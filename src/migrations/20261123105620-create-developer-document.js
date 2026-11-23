'use strict';
/** @type {import('sequelize-cli').Migration} */
import { DOCUMENT_CATEGORIES, GOV_ID_TYPES, STATUS } from '../constants';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('developer_documents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      developer_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'developer_profiles',
          key: 'developer_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      document_category: {
        type: Sequelize.ENUM(...Object.values(DOCUMENT_CATEGORIES)),
        allowNull: false
      },
      gov_id_type: {
        type: Sequelize.ENUM(...Object.values(GOV_ID_TYPES)),
        allowNull: true
      },
      file_url: {
        type: Sequelize.STRING,
        allowNull: false
      },
      verification_status: {
        type: Sequelize.ENUM(...Object.values(STATUS)),
        allowNull: false
      },
      rejection_reason: {
        type: Sequelize.STRING,
        allowNull: true
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
    await queryInterface.dropTable('developer_documents');
  }
};