const Batiment = require('./batiment.js');


class Attraction extends Batiment{
    constructor(nom, employe, place_attraction, prix){
        super(nom,employe)
        this.place_attraction = place_attraction
        this.place_occupé = 0
        this.prix = prix
    }

    change_prix(prix){
        this.prix = prix
    }

    change_place_attraction(place_attraction){
        this.place_attraction = place_attraction
    }

    appeller_employee(membre, client){
        let ticket = (membre.length + 1)
        let prix_totale = this.prix * ticket
        if ((this.place_occupé + ticket) < this.place_attraction) {
            this.place_occupé += ticket
            this.employe.rencontre(membre, client, ticket, prix_totale)
        } else {
            this.place_attraction = 0
            this.employe.refu()
        }
    }
}

module.exports = Attraction