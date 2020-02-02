const Batiment = require('./batiment.js');


class Attraction extends Batiment {
    constructor(nom, employe, place_attraction, prix, place_occupé) {
        super(nom, employe)
        this.place_attraction = place_attraction
        this.place_occupé = place_occupé
        this.prix = prix
    }

    change_prix(prix) {
        this.prix = prix
    }

    change_place_attraction(place_attraction) {
        this.place_attraction = place_attraction
    }

    appeller_employee(membre, client) {
        let ticket = (membre.length)
        let prix_totale = this.prix * ticket
        if ((this.place_occupé + ticket) < this.place_attraction) {
            this.place_occupé += ticket
            this.employe.rencontre(membre, client, ticket, prix_totale, this.nom)
        } else {
            this.place_occupé = 0
            this.employe.refu()
        }
    }
}

module.exports = Attraction