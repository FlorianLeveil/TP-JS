'use strict';
module.exports = (sequelize, DataTypes) => {
  const perso = sequelize.define('perso', {
    nom: DataTypes.STRING,
    lvl: DataTypes.INTEGER,
    coifId: DataTypes.INTEGER,
    capeId: DataTypes.INTEGER,
    botteId: DataTypes.INTEGER,
    ceintureId: DataTypes.INTEGER,
    anneauId: DataTypes.INTEGER,
    amuletteId: DataTypes.INTEGER,
    cacId: DataTypes.INTEGER,
    bouclierId: DataTypes.INTEGER,
    dofuId: DataTypes.INTEGER,
    tropheeId: DataTypes.INTEGER,
    montureId: DataTypes.INTEGER,
    familierId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  perso.associate = function(models) {
    perso.belongsTo(models.User, {
      foreignKey: 'userId'
    });
    perso.belongsTo(models.coif, {
      foreignKey: 'coifId'
    });
    perso.belongsTo(models.botte, {
      foreignKey: 'botteId'
    });
    perso.belongsTo(models.ceinture, {
      foreignKey: 'ceintureId'
    });
    perso.belongsTo(models.cape, {
      foreignKey: 'capeId'
    });
    perso.belongsTo(models.anneau, {
      foreignKey: 'anneauId',
    });
    perso.belongsTo(models.amulette, {
      foreignKey: 'amuletteId'
    });
    perso.belongsTo(models.cac, {
      foreignKey: 'cacId'
    });
    perso.belongsTo(models.bouclier, {
      foreignKey: 'bouclierId'
    });
    perso.belongsTo(models.dofus, {
      foreignKey: 'dofuId',
    });
    perso.belongsTo(models.trophee, {
      foreignKey: 'tropheeId',
    });
    perso.belongsTo(models.monture, {
      foreignKey: 'montureId'
    });
    perso.belongsTo(models.familier, {
      foreignKey: 'familierId'
    });
  };
  return perso;
};