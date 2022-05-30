"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("pets", "ownerId", {
      type: Sequelize.INTEGER,
      references: {
        model: "owners",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    await queryInterface.addColumn("pets", "speciesId", {
      type: Sequelize.INTEGER,
      references: {
        model: "species",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("pets", "ownerId");
    await queryInterface.removeColumn("pets", "speciesId");
  },
};
