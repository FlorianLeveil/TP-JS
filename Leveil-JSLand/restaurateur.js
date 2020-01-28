const Personne = require('./personne.js');


class Restaurateur extends Personne{
    constructor(prenom, nom) {
        super(nom, prenom);
    };
}

module.exports = Restaurateur