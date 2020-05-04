'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('cacs', [{
      img: 'epe_glour.png',
      name: 'Epée Gloursonne',
      type_cac: 'epe',
      lvl: 199,
      pv: 300,
      deg_neutre1: '7 à 12',
      deg_neutre2: '7 à 12',
      deg_neutre3: '7 à 12',
      deg_feu1: '',
      deg_air1: '',
      deg_terre1: '',
      deg_air1: '',      
      deg_eau1: '',
      pa: 0,
      pm: 0,
      po: 0,
      ini: 500,
      invo: 0,
      critique: 8,
      prosp: 25,
      soin: 0,
      sag: 50,
      fo: 0,
      int: 0,
      cha: 0,
      agi: 0,
      pui: 0,
      fui: 0,
      tac:15,
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
      re_f_neutre: 10,
      re_f_terre: 10,
      re_f_feu: 10,
      re_f_chance: 10,
      re_f_air: 10,
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
      re_crit: 10,
      re_pousse: 0,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        img: 'pelle_de_la_cour_sombre.png',
        name: 'Pelle de la cour sombre',
        lvl: 200,
        type_cac: 'pelle',
        pv: 300,
        deg_neutre1: '',
        deg_neutre2: '',
        deg_neutre3: '',
        deg_feu1: '',
        deg_air1: '50 à 60',
        deg_terre1: '',
        deg_air1: '70',      
        deg_eau1: '',
        pa: 0,
        pm: 0,
        po: 1,
        ini: 0,
        invo: 0,
        critique: 3,
        prosp: 20,
        soin: 0,
        sag: 50,
        fo: 0,
        int: 0,
        cha: 0,
        agi: 0,
        pui: 0,
        fui: -15,
        tac:0,
        esq_pa: 10,
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
        re_x_terre: 10,
        re_x_feu: 0,
        re_x_chance: 10,
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
        re_pousse: 30,
        createdAt: new Date(),
        updatedAt: new Date()
        },{
          img: 'nothing.png',
          name: 'No cac',
          lvl: 0,
          type_cac: '',
          pv: 0,
          deg_neutre1: '',
          deg_neutre2: '',
          deg_neutre3: '',
          deg_feu1: '',
          deg_air1: '',
          deg_terre1: '',
          deg_air1: '',      
          deg_eau1: '',
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
          }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('cacs', null, {});
  }
};