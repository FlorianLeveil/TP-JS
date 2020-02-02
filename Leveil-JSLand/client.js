const Personne = require('./personne.js');
const prompts = require('prompts');


class Client extends Personne {

    constructor(prenom, nom, budget) {
        super(nom, prenom);
        this.budget = budget;
        this.historique = [0, "0"]
    };

    payer(prix, lieu) {
        if (this.check_prix(prix) == true) {
            this.budget -= prix;
            this.historique[0] = prix;
            this.historique[1] = lieu;
            return true
        } else {
            return false
        }

    }

    check_prix(prix) {
        var check = this.budget
        return (check - prix) < 0 ? false : true;
    }
    rembourcement(prix) {
        this.budget += prix
    }

    async recharger_compte() {
        const responsee = await prompts({
            type: 'number',
            name: 'nombre',
            message: "De combien d'euros voulez vous recherger votre compte ?: "
        });

        this.rembourcement(responsee.nombre)
        console.log(`Vôtre nouveau solde est de ${this.budget}`)
    }


    async participer(client, attraction) {

        const response = await prompts({
            type: 'text',
            name: 'famille',
            message: 'Bonjour je voudrais participer à cette fantastique attraction. Je vous présente les membres de ma famille. Il  y a :'
        });

        await attraction.appeller_employee(response.famille.split(" "), client)


    }

    afficher_historique() {
        console.log("Vôtre derniere transaction s'élève à: " + this.historique[0] + "/n et c'était ici:" + this.historique[1])
    }

    async manger(lieu, restaurant) {
        console.log("Bonjour, je mangerai bien dans ce restaurant: " + lieu)
        await restaurant.contact_client_restaurant(this)
    }

    async appeller_manager(manager, employee) {
        await manager.check_employee(employee, this)
    }
}

module.exports = Client