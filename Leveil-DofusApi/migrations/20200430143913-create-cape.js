'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('capes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      img: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      lvl: {
        type: Sequelize.INTEGER
      },
      pv: {
        type: Sequelize.INTEGER
      },
      pa: {
        type: Sequelize.INTEGER
      },
      pm: {
        type: Sequelize.INTEGER
      },
      po: {
        type: Sequelize.INTEGER
      },
      ini: {
        type: Sequelize.INTEGER
      },
      invo: {
        type: Sequelize.INTEGER
      },
      critique: {
        type: Sequelize.INTEGER
      },
      prosp: {
        type: Sequelize.INTEGER
      },
      soin: {
        type: Sequelize.INTEGER
      },
      sag: {
        type: Sequelize.INTEGER
      },
      fo: {
        type: Sequelize.INTEGER
      },
      int: {
        type: Sequelize.INTEGER
      },
      cha: {
        type: Sequelize.INTEGER
      },
      agi: {
        type: Sequelize.INTEGER
      },
      pui: {
        type: Sequelize.INTEGER
      },
      fui: {
        type: Sequelize.INTEGER
      },
      tac: {
        type: Sequelize.INTEGER
      },
      esq_pa: {
        type: Sequelize.INTEGER
      },
      esq_pm: {
        type: Sequelize.INTEGER
      },
      ret_pa: {
        type: Sequelize.INTEGER
      },
      ret_pm: {
        type: Sequelize.INTEGER
      },
      pod: {
        type: Sequelize.INTEGER
      },
      dmg_piege: {
        type: Sequelize.INTEGER
      },
      pui_piege: {
        type: Sequelize.INTEGER
      },
      renvoie_dmg: {
        type: Sequelize.INTEGER
      },
      bou: {
        type: Sequelize.INTEGER
      },
      dmg: {
        type: Sequelize.INTEGER
      },
      dmg_f_neutre: {
        type: Sequelize.INTEGER
      },
      dmg_f_terre: {
        type: Sequelize.INTEGER
      },
      dmg_f_feu: {
        type: Sequelize.INTEGER
      },
      dmg_f_chance: {
        type: Sequelize.INTEGER
      },
      dmg_f_air: {
        type: Sequelize.INTEGER
      },
      re_f_neutre: {
        type: Sequelize.INTEGER
      },
      re_f_terre: {
        type: Sequelize.INTEGER
      },
      re_f_feu: {
        type: Sequelize.INTEGER
      },
      re_f_chance: {
        type: Sequelize.INTEGER
      },
      re_f_air: {
        type: Sequelize.INTEGER
      },
      re_x_neutre: {
        type: Sequelize.INTEGER
      },
      re_x_terre: {
        type: Sequelize.INTEGER
      },
      re_x_feu: {
        type: Sequelize.INTEGER
      },
      re_x_chance: {
        type: Sequelize.INTEGER
      },
      re_x_air: {
        type: Sequelize.INTEGER
      },
      re_x_mele: {
        type: Sequelize.INTEGER
      },
      re_x_distance: {
        type: Sequelize.INTEGER
      },
      re_x_sorts: {
        type: Sequelize.INTEGER
      },
      dmg_x_mele: {
        type: Sequelize.INTEGER
      },
      dmg_x_distance: {
        type: Sequelize.INTEGER
      },
      dmg_x_arme: {
        type: Sequelize.INTEGER
      },
      dmg_x_sorts: {
        type: Sequelize.INTEGER
      },
      dmg_crit: {
        type: Sequelize.INTEGER
      },
      dmg_pousee: {
        type: Sequelize.INTEGER
      },
      re_crit: {
        type: Sequelize.INTEGER
      },
      re_pousse: {
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
    return queryInterface.dropTable('capes');
  }
};