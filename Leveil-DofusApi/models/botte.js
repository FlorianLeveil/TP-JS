'use strict';
module.exports = (sequelize, DataTypes) => {
  const botte = sequelize.define('botte', {
    img: DataTypes.STRING,
    name: DataTypes.STRING,
    lvl: DataTypes.INTEGER,
    tac: DataTypes.INTEGER,
    dmg: DataTypes.INTEGER,
    pv: DataTypes.INTEGER,
    pa: DataTypes.INTEGER,
    pm: DataTypes.INTEGER,
    po: DataTypes.INTEGER,
    ini: DataTypes.INTEGER,
    invo: DataTypes.INTEGER,
    critique: DataTypes.INTEGER,
    prosp: DataTypes.INTEGER,
    soin: DataTypes.INTEGER,
    sag: DataTypes.INTEGER,
    fo: DataTypes.INTEGER,
    int: DataTypes.INTEGER,
    cha: DataTypes.INTEGER,
    agi: DataTypes.INTEGER,
    pui: DataTypes.INTEGER,
    fui: DataTypes.INTEGER,
    esq_pa: DataTypes.INTEGER,
    esq_pm: DataTypes.INTEGER,
    ret_pa: DataTypes.INTEGER,
    ret_pm: DataTypes.INTEGER,
    pod: DataTypes.INTEGER,
    dmg_piege: DataTypes.INTEGER,
    pui_piege: DataTypes.INTEGER,
    renvoie_dmg: DataTypes.INTEGER,
    bou: DataTypes.INTEGER,
    dmg_f_neutre: DataTypes.INTEGER,
    dmg_f_terre: DataTypes.INTEGER,
    dmg_f_feu: DataTypes.INTEGER,
    dmg_f_chance: DataTypes.INTEGER,
    dmg_f_air: DataTypes.INTEGER,
    re_f_neutre: DataTypes.INTEGER,
    re_f_terre: DataTypes.INTEGER,
    re_f_feu: DataTypes.INTEGER,
    re_f_chance: DataTypes.INTEGER,
    re_f_air: DataTypes.INTEGER,
    re_x_neutre: DataTypes.INTEGER,
    re_x_terre: DataTypes.INTEGER,
    re_x_feu: DataTypes.INTEGER,
    re_x_chance: DataTypes.INTEGER,
    re_x_air: DataTypes.INTEGER,
    re_x_mele: DataTypes.INTEGER,
    re_x_distance: DataTypes.INTEGER,
    re_x_sorts: DataTypes.INTEGER,
    dmg_x_mele: DataTypes.INTEGER,
    dmg_x_distance: DataTypes.INTEGER,
    dmg_x_arme: DataTypes.INTEGER,
    dmg_x_sorts: DataTypes.INTEGER,
    dmg_crit: DataTypes.INTEGER,
    dmg_pousee: DataTypes.INTEGER,
    re_crit: DataTypes.INTEGER,
    re_pousse: DataTypes.INTEGER
  }, {});
  botte.associate = function(models) {
    botte.hasMany(models.perso)
  };
  return botte;
};