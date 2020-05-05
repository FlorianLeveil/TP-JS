'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('capes', [{
      img: 'voile.png',
      name: "Voile d'encre",
      lvl: 191,
      pv: 350,
      pa: 0,
      pm: 0,
      po: 1,
      ini: 0,
      invo: 0,
      critique: 3,
      prosp: 0,
      soin: 0,
      sag: 40,
      fo: 70,
      int: 70,
      cha: 0,
      agi: 0,
      pui: 0,
      fui: 0,
      tac:0,
      esq_pa: 0,
      esq_pm: 0,
      ret_pa: 0,
      ret_pm: 0,
      pod: 0,
      dmg:10,
      dmg_piege: 0,
      pui_piege: 0,
      renvoie_dmg: 0,
      bou: 0,
      dmg_f_neutre: 0,
      dmg_f_terre: 0,
      dmg_f_feu: 0,
      dmg_f_chance: 0,
      dmg_f_air: 0,
      re_f_neutre: 0,
      re_f_terre: 0,
      re_f_feu: 0,
      re_f_chance: 0,
      re_f_air: 0,
      re_x_neutre: 0,
      re_x_terre: 0,
      re_x_feu: 10,
      re_x_chance: 10,
      re_x_air: 10,
      re_x_mele: 0,
      re_x_distance: 0,
      re_x_sorts: 0,
      dmg_x_mele: 0,
      dmg_x_distance: 0,
      dmg_x_arme: 0,
      dmg_x_sorts: 0,
      dmg_crit: 0,
      dmg_pousee: 0,
      re_crit: 0,
      re_pousse: 0,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        img: 'voilamibe.png',
        name: 'VoilaMibe',
        lvl: 200,
        pv: 400,
        pa: 0,
        pm: 1,
        po: 1,
        ini: 0,
        invo: 0,
        critique: 0,
        prosp: 0,
        soin: 0,
        sag: 50,
        fo: 0,
        int: 0,
        cha: 0,
        agi: 0,
        pui: 70,
        fui: 0,
        tac:0,
        esq_pa: 0,
        esq_pm: 0,
        ret_pa: 0,
        ret_pm: 0,
        pod: 0,
        dmg_piege: 0,
        pui_piege: 0,
        renvoie_dmg: 0,
        bou: 0,
        dmg:0,
        dmg_f_neutre: 15,
        dmg_f_terre: 15,
        dmg_f_feu: 15,
        dmg_f_chance: 15,
        dmg_f_air: 15,
        re_f_neutre: 0,
        re_f_terre: 0,
        re_f_feu: 0,
        re_f_chance: 0,
        re_f_air: 0,
        re_x_neutre: 0,
        re_x_terre: 0,
        re_x_feu: 0,
        re_x_chance: 7,
        re_x_air: 0,
        re_x_mele: 0,
        re_x_distance: 0,
        re_x_sorts: 0,
        dmg_x_mele: 0,
        dmg_x_distance: 0,
        dmg_x_arme: 0,
        dmg_x_sorts: 0,
        dmg_crit: -20,
        dmg_pousee: 0,
        re_crit: 0,
        re_pousse: 0,
        createdAt: new Date(),
        updatedAt: new Date()
        },{
          img: 'nothing.png',
          name: 'No Cape',
          lvl: 0,
          pv: 0,
          pa: 0,
          pm: 0,
          po: 0,
          ini: 0,
          invo: 0,
          critique: 0,
          prosp: 0,
          soin: 0,
          sag: 0,
          fo: 0,
          int: 0,
          cha: 0,
          agi: 0,
          pui: 0,
          fui: 0,
          tac:0,
          esq_pa: 0,
          esq_pm: 0,
          ret_pa: 0,
          ret_pm: 0,
          pod: 0,
          dmg_piege: 0,
          pui_piege: 0,
          renvoie_dmg: 0,
          bou: 0,
          dmg:0,
          dmg_f_neutre: 0,
          dmg_f_terre: 0,
          dmg_f_feu: 0,
          dmg_f_chance: 0,
          dmg_f_air: 0,
          re_f_neutre: 0,
          re_f_terre: 0,
          re_f_feu: 0,
          re_f_chance: 0,
          re_f_air: 0,
          re_x_neutre: 0,
          re_x_terre: 0,
          re_x_feu: 0,
          re_x_chance: 0,
          re_x_air: 0,
          re_x_mele: 0,
          re_x_distance: 0,
          re_x_sorts: 0,
          dmg_x_mele: 0,
          dmg_x_distance: 0,
          dmg_x_arme: 0,
          dmg_x_sorts: 0,
          dmg_crit: 0,
          dmg_pousee: 0,
          re_crit: 0,
          re_pousse: 0,
          createdAt: new Date(),
          updatedAt: new Date()
          }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('capes', null, {});
  }
};