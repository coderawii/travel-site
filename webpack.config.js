var path = require('path'); // za ovo nam ne treba npm instalacija, vec je deo node-a

module.exports = {
    mode: 'none',
    entry: "./app/assets/scripts/App.js", // koji fajl treba da posmatra i da kreira bundle
    output: { // gde da smesti krajnji bandlovan projekat
        // path: "./app/temp/scripts", // lokacija gde ce biti smesten bundle fajl za ovaj gore js fajl. medjutim ovo je relativna putanja u odnosu na trenutni folder, a webpacku treba apsolutna putanja da moze vrlo lako da je nadje na folder/file na kompu. I to cemo omoguciti dodavanjem path paketa za koji nam ne treba posebna npm instalacija jer je vec sastavni deo node-a, samo cemo ga preko promenljive i require-a pozvati ovde, implementirati takoreci da mozemo da koristimo
        path: path.resolve(__dirname, "./app/temp/scripts"), // __dirname to ce da kreira apsolutnu putanju za nas trenutni folder na kompu, a za drugi argument cemo staviti relativnu putanju za taj specifican folder za koji smo zainteresovani
        filename: "App.js" // kontrolisemo ime od bandl fajla
    }
}