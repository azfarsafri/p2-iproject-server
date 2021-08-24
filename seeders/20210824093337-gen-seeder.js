'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert("Generations", [
      {
        name: "kanto",
        total: 151,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "johto",
        total: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "hoenn",
        total: 135,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "sinnoh",
        total: 107,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "unova",
        total: 156,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "kalos",
        total: 72,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "alola",
        total: 88,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "galar",
        total: 91,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Generations", null, {})
  }
};
