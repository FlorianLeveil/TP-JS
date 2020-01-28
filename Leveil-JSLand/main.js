const Client = require('./client.js');
const Manager = require('./manager.js');
const Caissier = require('./caissier.js');
const Restaurateur = require('./restaurateur.js');

const Restaurant = require('./restaurant.js');
const Attraction = require('./attraction.js');



var client1 = new Client("Florian", "Leveil", 50)
var restaurateur1 = new Restaurateur("Florian", "Leveil")
var caissier1 = new Caissier("Florian", "Leveil")
var mes_employee = [caissier1,restaurateur1]

var manager1 = new Manager("Florian", "Leveil", mes_employee)

var restaurant1 = new Restaurant("Resto1", restaurateur1)
var attraction1 = new Attraction("Attraction1", caissier1, 50, 7)



console.log(client1)
console.log(restaurant1)
console.log(attraction1)
console.log(manager1)
console.log(caissier1)
console.log(restaurateur1)

var prenom = ["Lol"," Loool"," oi"]

client1.participer(prenom, client1, attraction1)
console.log(attraction1.place_occupé)


