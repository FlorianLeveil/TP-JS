const Personne = require('./personne.js');


class Manager extends Personne {
    constructor(prenom, nom, liste_employee) {
        super(nom, prenom);
        this.liste_employee = liste_employee
    };

    async check_employee(employee, client) {
        let check = false
        this.liste_employee.forEach(element => {
            if (element.nom == employee.nom) {
                console.log(`Quoi ?! Votre derniere expérience au ${client.historique[1]} avec Mr ${employee.nom} ne vous a pas convaincu ?? Laissez moi vous dédommager. Tenez voilà ${client.historique[0]} euros.`)
                client.rembourcement(client.historique[0])
                check == true
            } else {
                if (check == false) {
                    console.log(`Je ne connais pas Mr ${employee.nom}, je ne suis pas son manager ! Je suis le manager de Mr ${element.nom}`)
                }
            }
        });


    }
}

module.exports = Manager