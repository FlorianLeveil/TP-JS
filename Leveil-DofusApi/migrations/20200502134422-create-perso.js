'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('persos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nom: {
        allowNull: false,
        type: Sequelize.STRING
      },
      lvl: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      coifId: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      capeId: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      botteId: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      ceintureId: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      anneauId: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      amuletteId: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      cacId: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      bouclierId: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      dofuId: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      tropheeId: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      montureId: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      familierId: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('persos');
  }
};