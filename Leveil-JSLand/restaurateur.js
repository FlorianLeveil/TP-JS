const Personne = require('./personne.js');
const prompts = require('prompts');



class Restaurateur extends Personne {
    constructor(prenom, nom) {
        super(nom, prenom);
    };

    async contact_client_restaurateur(nombre, client, menu, lieu) {

        const response2 = await prompts({
            type: 'text',
            name: 'value',
            message: `Très bien, vous êtes donc ${nombre}. Combien y aura t-il de menus 1 ? Et combien de menus 2 ?.`,
            validate: value => (nombre == (parseInt(value.split(" ")[0]) + parseInt(value.split(" ")[1]))) ? true : `J'ai du mal noter quelque chose... On recommence !`

        });
        let prix = (menu[0] * parseInt(response2.value.split(" ")[0]) + menu[1] * parseInt(response2.value.split(" ")[1]))
        const peut_il_payer = await client.payer(prix, lieu)
        if (peut_il_payer == false) {
            console.log('Vous ne pouvez pas payer !')
        }
    }
}

module.exports = Restaurateur