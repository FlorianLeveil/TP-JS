const Batiment = require('./batiment.js');
const prompts = require('prompts');



class Restaurant extends Batiment {
    constructor(nom, employe) {
        super(nom, employe)
        this.menu = [5, 10]
    }

    changer_prix_menu(n_menu, prix) {
        this.menu[n_menu - 1] = prix
    }

    async contact_client_restaurant(client) {

        const response = await prompts({
            type: 'number',
            name: 'value',
            message: ' Ah bonjour ! Combien êtes vous ? ',
            validate: value => (value > 0) ? true : `Veuillez rentrer un nombre entier`
        });
        await this.employe.contact_client_restaurateur(response.value, client, this.menu, this.nom)

    }
}

module.exports = Restaurant