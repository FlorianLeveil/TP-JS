const app = require('express') ();


app.set('views', './views')
app.set('view engine', 'hbs')
app.get('/', (req,res) => {
    res.render('main', {
        title:'Dofus Stuff',
        name:'Coiffe de la reine des voleurs',
        lvl:'200',
        pv:'400',
        pa:'',
        pm:'',
        po:'',
        ini:'',
        invo:'1',
        critique:'',
        prosp:'15',
        soin:'',
        sag:'50',
        fo:'80',
        int:'',
        cha:'',
        agi:'80',
        pui:'',
        fui:'',
        esq_pa:'',
        esq_pm:'',
        ret_pa:'',
        ret_pm:'',
        pod:'',
        dmg_piege:'',
        pui_piege:'',
        renvoie_dmg:'',
        bou:'',
        dmg_f_neutre:'15',
        dmg_f_terre:'15',
        dmg_f_feu:'',
        dmg_f_chance:'',
        dmg_f_air:'15',
        re_f_neutre:'',
        re_f_terre:'',
        re_f_feu:'',
        re_f_chance:'',
        re_f_air:'',
        re_x_neutre:'',
        re_x_terre:'10',
        re_x_feu:'',
        re_x_chance:'',
        re_x_mele:'',
        re_x_distance:'',
        re_x_arme:'',
        re_x_sorts:'',
        dmg_x_mele:'',
        dmg_x_distance:'',
        dmg_x_arme:'',
        dmg_x_sorts:'',
        dmg_crit:'',
        dmg_pousse:'',
        re_crit:'25',
        re_pousse:'',

    })
})

app.listen(5000)


