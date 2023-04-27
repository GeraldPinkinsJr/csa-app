"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Items", [
      {
        name: "Carrot",
        price: 0.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tomato",
        price: 1.5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Spinach",
        price: 3.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kale",
        price: 2.5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Apple",
        price: 1.2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Orange",
        price: 1.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Grapes",
        price: 2.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Strawberry",
        price: 2.5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Basil",
        price: 1.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mint",
        price: 1.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Parsley",
        price: 1.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Lettuce",
        price: 1.5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cucumber",
        price: 1.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Broccoli",
        price: 2.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cauliflower",
        price: 2.5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Items", null, {});
  },
};
