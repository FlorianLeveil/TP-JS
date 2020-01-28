const Batiment = require('./batiment.js');


class Restaurant extends Batiment{
    constructor(nom, employe){
        super(nom,employe)
        this.menu = [10,15]
    }

    changer_prix_menu(n_menu, prix) {
        this.menu[n_menu+1] = prix
    }
}

module.exports = Restaurant