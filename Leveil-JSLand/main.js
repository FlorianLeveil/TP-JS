const prompts = require('prompts');
const Client = require('./client.js');
const Manager = require('./manager.js');
const Caissier = require('./caissier.js');
const Restaurateur = require('./restaurateur.js');
const Restaurant = require('./restaurant.js');
const Attraction = require('./attraction.js');


let client1 = new Client("Florian", "Leveil", 350)


let caissier1 = new Caissier("Pierre", "LeBarbare")
let caissier2 = new Caissier("Jean-Marie", "Pinot")
let caissier3 = new Caissier("Jean-Jacque", "Poulard")


let restaurateur1 = new Restaurateur("Nicolas", "Lorenzato")
let restaurateur2 = new Restaurateur("Victore", "Lelouche")
let restaurateur3 = new Restaurateur("Arnaud", "Dozo")


let mes_employee = [caissier1, restaurateur1]
let mes_employee2 = [caissier2, restaurateur2]
let mes_employee3 = [caissier3, restaurateur3]

let manager1 = new Manager("Miguel", "MonCoeur", mes_employee)
let manager2 = new Manager("Emeric", "Djaloud", mes_employee2)
let manager3 = new Manager("Jean", "LaSalle", mes_employee3)


let restaurant1 = new Restaurant("Pattiya", restaurateur2)
let restaurant2 = new Restaurant("Sturbacks Tea", restaurateur1)
let restaurant3 = new Restaurant("Palais des glaces", restaurateur3)

restaurant3.changer_prix_menu(1, 300)
restaurant3.changer_prix_menu(2, 300)


let attraction1 = new Attraction("Montagne-Russe", caissier1, 50, 10, 0);
let attraction2 = new Attraction("Maison Hantée", caissier2, 50, 10, 49);
let attraction3 = new Attraction("Chaisse Volante", caissier3, 50, 10, 0);



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function gogo() {
    console.log("Nous faisons la queue ....")
    await sleep(1000)
    console.log("Nous sommes enfin au magnifique parc de JSLand. Nous allons commencer notre fabuleuse après-midi par les montagnes russes.")
    console.log("Nous faisons la queue ....")
    await sleep(2000)
    await client1.participer(client1, attraction1)
    await sleep(1750)
    console.log("Les montages russes étaient super, dommage que le petit Michel soit malade !")
    console.log("Allons à la maison hanté !")
    console.log("Nous faisons la queue ....")
    await sleep(1560)
    await client1.participer(client1, attraction2)
    console.log(" Pour patienter, nous mangeons une barbe à papa avec la mascotte du parc.")
    await sleep(3000)
    console.log("Nous allons rééssayer !!!")
    await client1.participer(client1, attraction2)
    await sleep(5000)
    console.log("ça faisais super peur !! Allons au Restaurant !!")
    await client1.manger(restaurant1.nom, restaurant1)
    await sleep(2000)
    console.log("Enfin notre commande !!!")
    await sleep(5000)
    console.log("Julia à mal au ventre, allons chercher un manager !")
    await sleep(1500)
    await client1.appeller_manager(manager1, restaurateur2)
    await sleep(700)
    await client1.appeller_manager(manager2, restaurateur2)
    console.log("Allonrs faire les chaisses volantes !")
    console.log("Nous faisons la queue ....")
    await sleep(1000)
    await client1.participer(client1, attraction3)
    await sleep(2000)
    console.log("C'était trop bien !! Allons au Palais des Glaces !")
    await sleep(2000)
    await client1.manger(restaurant3.nom, restaurant3)
    console.log("Il faut que je recharge donc mon compte !")
    await client1.recharger_compte()
    console.log("Nous faisons la queue ....")
    await sleep(1670)
    await client1.manger(restaurant2.nom, restaurant2)
    await sleep(3000)
    console.log("C'était super bon, j'ai passé une super journée")
    console.log("FIN")

}

gogo()