"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "places",
      [
        {
          name: "rijksmuseum",
          description:
            "The Rijksmuseum is a Dutch national museum dedicated to arts and history in Amsterdam. The museum is located at the Museum Square in the borough Amsterdam South, close to the Van Gogh Museum, the Stedelijk Museum Amsterdam, and the Concertgebouw.",
          city: "Amsterdam",
          photo: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "westergas",
          description:
            "Located at Westerpark, this sprawling complex of former industrial buildings used to be the city’s municipal gasworks. Now transformed into a colourful cultural hub, Westergas is home to a variety of tempting bars, restaurants, coffee roasters, a microbrewery, art-house cinema, and a whole host of creative businesses. Look out for regular food markets, mini-festivals and events held here, such as the vibrant Sunday market held on the first Sunday of every month.",
          city: "Amsterdam",
          photo: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("places", null, {});
  },
};
