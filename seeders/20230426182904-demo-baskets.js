"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Baskets", [
      {
        name: "Vitality Boost",
        price: 10.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Energy Pack",
        price: 12.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Immunity Boost",
        price: 15.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mindful Munchies",
        price: 9.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Green Goodness",
        price: 14.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Baskets", null, {});
  },
};
