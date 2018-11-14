var $ = require('jquery'); // dakle prethodno smo instalirali u terminalu npm install jqueru --save, i ovde ga stavili u promenljivu $ koji cemo koristiti kao jquery selektor, i sada mozemo da koristimo jquery najnormalnije, ne treba da ga skidamo sa neta i inkludujemo u html 

// kako implementirati jeddan js file u drugi, u gulpu smo to radili sa require() ali require ne postoji u cistom js, u gulpu postoji jer radi u okviru node-a, a node podrzava reqire() funcionalnost, a ovaj fajl u km smo tenutno ce se pokretati u okviru browsera, a browser pojma nema sta je require.
// ali zato imamo webpach (koji instaliramo iz node-a) koji cemo instalirati n ns komp, i reci mu da posmatra nas js file, i on ce da detektuje require ili importovane fajlove i webpach ce da bandluje sve individualne fajlove zajedno u jedan js fajl, a ti bundle fajlovi rade u browserima. BUNDLED = paket, svezanj
// var Person = require('./modules/Person'); // ovo je node nacin i node f-ja, a imamo i es6 nacin, a to je sa import:
import Person from "./modules/Person"; // es16 i posto koristimo es16 import nacin, trebalo bi i da koristimo es6 export nacin:


// console.log(Person.nekiProperty);
// Person.nekaFunckija();

class Adult extends Person {
    payTaxes() {
        console.log(this.name + " now owes $0 in taxes");
        
    }
}


var john = new Person("John Doe", "blue");
john.greet();

var jane = new Adult("Jane Smith", "orange");
jane.greet();
jane.payTaxes();

// $('h1').remove();