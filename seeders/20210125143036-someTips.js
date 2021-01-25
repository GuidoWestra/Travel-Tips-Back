"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "tips",
      [
        {
          userId: 1,
          userName: "testUser",
          placeId: 1,
          text: "really good, amazing!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          userName: "dummy",
          placeId: 2,
          text: "even better then 1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("tips", null, {});
  },
};
