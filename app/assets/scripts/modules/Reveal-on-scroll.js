import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
    constructor(els, offset) { // BITAN JE REDOSLED F-JA !!!
        // this.itemsToReveal = $('.feature-item, .testimonial');
        this.itemsToReveal = els;
        this.offsetPercentage = offset;
        this.hideInitially();
        this.createWaypoints();
    }

    hideInitially() {
        this.itemsToReveal.addClass("reveal-item"); // a posto zelimo da se ovo okine cim se ucita stranica, pozivamo ga u constructoru
    }

    createWaypoints(){
        var that = this;
        this.itemsToReveal.each(function(){
            // this; // ovo je da se odnosi na specifican element
            //i sad ovde kriramo po jedan Waypoint za svaki item (ima ih 4)
            var currentItem = this;
            new Waypoint({
                element: currentItem, // DOM element koji zelimo da posmatramo (watch) kada skrolujemo stranicu
                handler: function() {
                    // zelimo na taj skrol do currentItem-a, da se doda css klasa kojom ce taj nas item/div postepeno postati vidljivi
                    $(currentItem).addClass("reveal-item--is-visible");
                }, // sta zelimo da se dogodi kada se skroluje na taj element
                // offset: "85%"// ovo pusti video 046 klip pred kraj objasnjava zasto smo dodali offset, u stustini igraj se pa probaj sa i bez
                offset: that.offsetPercentage // medjutim ovo this.offsetPercentage nece moci uspesno da pristupi this.offsetPercentage = offset; propertyju, to je jer u okviru ovog obj Waypoint js this keyw. vise ne pokazuje na gl objekat RevealOnScroll koji ima offsetPercebtage property, ovde ovo this pokazuje na ovaj Waypoint individualan obj koji je kreiran, pa zato treba da pristupimo gl objektu u okviru ovog this.offsetPercentage kontexta, i zato cemo gore, da napravimo promenljivu that koja ce biti jednaka this, jer onda ce preko that-a, ovaj this da pokazuje sta treba
            }); // dakle ovaj kod ce se izvrsiti 4x, iliti za svaki item u itemsToReveal po jednom, i onda kada se dodje do element: propertyja mi zelimo da damo do znanja koji element je na redu u loop-u, tj kroz koji se u datom momentu loopujemo, i u okviru jquery each() this keywoard ukazuje na trenutni element kroz koji se loopuje, tj trenutni DOM element, ali bezobzira, ne mozemo za elemenent staviti this, jer taj deo koda ( new Waypoint({element: x, handler: x}); ) kreira novi objekat, a u okviru constructor f-je (u new Waypoint()), this ce vratiti taj objekat. Ali izvan tog konstruktora tj new Waypoint-a, ovaj odmah iznad this i ukazuje na DOM objekat koji zelimo
        });
    }
}

export default RevealOnScroll;