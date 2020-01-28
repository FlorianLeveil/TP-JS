class Batiment {
    constructor(nom, employe){
        this.nom = nom
        this.employe = employe
    }

    change_nom(nom){
        this.nom = nom
    }

    change_employe(employe){
        this.employe = employe
    }
}

module.exports = Batiment
