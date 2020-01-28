const Personne = require('./personne.js');


class Manager extends Personne{
    constructor(prenom, nom, liste_employee) {
        super(nom, prenom);
        this.liste_employee = liste_employee
    };
}

module.exports = Manager