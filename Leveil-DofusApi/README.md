# TP Dofus API

## Sommaire

* Description du projet
* Fonctionalités
* Techno utilisée
* Installation

## Description du projet

Mon projet consistait à reproduire certaines fonctionalités du site Dofus book. Je devais pouvoir créer différent personnages et pouvoir les équiper en fonction de mes besoins. Le site aurait alors calculé à ma place mes différents caractéristiques.

[Ma présentation.](./images/presentation_dofus_api.pdf)
[Ma base de donnée.](./images/database_developement.pdf)


## Fonctionalitées

* Voir les items implémentés en BDD
* Créer un User
* Modifier son User
* Supprimer son User
* Se connecter / déconnecter
* Créer un ou des personnages
* Supprimer ses personnages
* Equiper un personnage et avec des items
* Changer de personnage

## Techno utilisé

* Node Js
* Express
* Sequelize
* PUG (Jade)

## Installation (Tester sur ArchLinux)

### Pré requis

* mariadb
* node
* Ne pas avoir de base de données qui s'appelle `database_development`
* Mettre son MDP et User mariadb dans le fichier de conf `/config/config.json`
### Commandes

Installer tous les paquets:

```
npm install
```

Générer la base de données

```
npx sequelize db:create
```

Créer les tables

```
npx sequelize db:migrate
```

Injecter les seeders (pour avoir de la data)
```
npx sequelize db:seed:all
```

Le site sera accesible en localhost sur le port 8080.
