"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "developer_reviews",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        developer_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "developer_profiles",
            key: "developer_id",
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
        buyer_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "buyer_profiles",
            key: "buyer_id",
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
        rating: {
          type: Sequelize.DECIMAL(2, 1),
          allowNull: false,
        },
        review_text: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      {
        uniqueKeys: {
          unique_buyer_developer_review: {
            fields: ["buyer_id", "developer_id"],
          },
        },
      },
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("developer_reviews");
  },
};
