class Personne {
    constructor(nom, prenom) {
      this.nom = nom;
      this.prenom = prenom;
    }

    change_nom(new_nom) {
      this.nom = new_nom
    }

    change_prenom(new_prenom) {
      this.prenom = new_prenom
    }
}

module.exports = Personne
