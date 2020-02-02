const Personne = require('./personne.js');


class Caissier extends Personne {
    constructor(prenom, nom) {
        super(nom, prenom);
    };

    rencontre(membre, client, ticket, prix_totale, attraction_nom) {

        console.log("Ah enchanté de vous rencontrer : " + membre + ". Il y aura donc " + ticket + " tickets soit " + prix_totale + " euros s'il vous plait.")
        let result = client.payer(prix_totale, attraction_nom)
        if (result == false) {
            console.log("Ah... Il semblerait que vous n'avez pas assez sur votre compte.")
        }
    }

    refu() {
        console.log("Il n'y a plus assez de places disponibles, veuillez attendre votre tour.")
    }


}

module.exports = Caissier