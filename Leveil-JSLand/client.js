const Personne = require('./personne.js');


class Client extends Personne{

    constructor(prenom, nom, budget) {
        super(nom, prenom);
        this.budget = budget;
        this.historique = [0,"0"]
    };

    payer(prix, lieu){
        if (this.check_prix(prix) == true) {
            this.budget -= prix;
            this.historique[0] = prix;
            this.historique[1] = lieu;
        } else {
            console.log("Vous ne pouvez pas payer")
        }
        
    }

    check_prix(prix){
        var check = this.budget
        return (check - prix) < 0 ? false : true;
    }

    participer(membre,client, attraction){
        attraction.appeller_employee(membre, client)
        // console.log("Bonjour je voudrais participer à cette fantastique attraction. Je vous présente les membres de ma famille. Il  y a : "+ this.nom + ", " + membre)
    }

    afficher_historique(){
        console.log("Vôtre derniere transaction s'élève à: "+ this.historique[0] + "/n et c'était ici:" + this.historique[1])
    }

    manger(lieu){
        console.log("Bonjour, je mangerai bien dans ce restaurant, " + lieu)
    }
}

module.exports = Client