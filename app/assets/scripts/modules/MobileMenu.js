import $ from "jquery";

class MobileMenu {
    constructor(){
        // $(".site-header__menu-icon").click(function(){
        //     console.log("Gornj desna ikonica je kliknuta, ali ovo je nnapravlejno jquery spagetty kodom");
        // }); // jquery spaghetti jer se radi sve odjednom, prvo selektujemo elemente iz DOMa, drugo mi rukujemo s dogadjajima, i trece definisemo fukncionalnost, tj sta treba da se uradi odredjenim eventom (selektor-event-funckionalnost iliti forks-spones-knifes iliti viljuske-kasike-nozevi) 

        this.siteHeader = $(".site-header");
        this.menuIcon = $(".site-header__menu-icon");
        this.menuContent = $(".site-header__menu-content");
        this.events();
    }

    events() { // u jsu ovo events ime nije neko posebno ime, tj                      browser ne ocekuje ili ne trazi specijalan metod sa                 imenom events pa zato, ako zeimo da browser osluskuje               ovaj event cim se stranica ucita treba ond rucno da                 pozovemo ovaj metod cim je objekat kreiran pa cemo ga               tako pozvati u construcoturu
        // this.menuIcon.click(this.toggleTheMenu.bind("hello"));
        // console.log(this); // this ukazivanje test
        this.menuIcon.click(this.toggleTheMenu.bind(this));

    } 

    toggleTheMenu() {
        // console.log(this); // this ukazivanje test - ukazuje na menuIcon element (vraca citav div)
        // this.remove(); // i on ce da obrise gore pomenuti div

        // ali ovde ne zelimo da ovaj this bude jednako sa menuIcon elementom, zelimo da ovo this ponovo ukazuje na nas objekat da mozemo da ga koristimo da pristupimo menuContent propertiju ali kako da to uradim, kako da overwritujemo js difoltno ponasanje i kako da imamo konacnu kontrolu nad ovim this keywordom? Pa, mozemo da koristimo js feature bind(), i njega cemo koristiti gore u click eventu kada preko this-a pristupamo toggleTheMenu, i unutar bind() se stavlja ono sto cemo koristiti u this-u kada se ovaj toggleTheMenu pozove, tj na sta zelimo da this ukazuje kada se bude koristio u toggleTheMenu
        // alert(this);

        this.menuContent.toggleClass("site-header__menu-content--is-visible"); // App.js:145 Uncaught TypeError: Cannot read property 'toogleClass' of undefined - i ova greska je sve zbog js THIS keyworda, ovu gresku dobijamo jer ovaj kod (this.menuContent) ne pristupa uspesno menuContent propertyju, i onda se pitamo zasto recimo u events() this.menuIcon ili this.toggleMenu f-nise kako treba, ili u constructoru u this.events(), a ovde ne. Odg je, jer se vrednost this-a menja u zavisnosti gde ga koristimo, u normalnim uslovima, (ovim prethodno navedenim gde recimo radi) kada this koristimo u sklopu/unutar objekata on ukazuje na objekat, ali zasto nam ovde this ima drugaciji value, zasto ne pokazuje na objekat? zato sto kada se ovaj toggleTheMenu metod pokrene, mi ga nismo pozvali direktno vec preko klika, kada korisnik klikne, dakle pozivamo ovaj metod u events() tj u klik event. A kad se f-ja koristi kao event hendler, this keyword unutar te fje (dakle this u toggleTheMenu), setuje DOM element da bude onaj gde je event okinut, dakle u ovom slucaju element na koji je kliknuto sto bi bio nas menuIcon element. I to mozemo bolje prikazati tako sto cemo metnuti console.log(this) u oba ova metoda, i y events() i u toggleTheMenu() da vidimo na sta ce da ukazuju

        this.siteHeader.toggleClass("site-header--is-expanded");
    }
}

export default MobileMenu;

// 