const Personne = require('./personne.js');


class Caissier extends Personne{
    constructor(prenom, nom) {
        super(nom, prenom);
    };

    rencontre(membre, client, ticket, prix_totale) {
        console.log("Ah enchanté de vous rencontrer : " + membre + " et "+  client.prenom + ". Il y aura donc "+ ticket +" tickets soit " + prix_totale + " euros s'il vous plait.")
    }

    refu() {
        console.log("Il n'y a plus assez de places disponibles, veuillez attendre votre tour.")
    }
}

module.exports = Caissier