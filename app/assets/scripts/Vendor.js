import '../../temp/scripts/modernizr';
import 'picturefill';

// kada su neki packages u pitanju onda je bolje da se napravi poseban js file za njihov import, a ne u recimo App.js, iu zato naapravismo Vendor.js
import 'lazysizes';
// Vendor.js smo ucitali u head sekciju, a ne dole iznad </body>, potom smo za testimonials slike, tj img, za klasu stavili lazysizes-klasu lazyload, a za srcset stavili data-srcset, i sada se ove testimonials slike dowmloaduju tek kad se skroluje neposredno blizu mesta na kojima su. A za backgroudn of testimonials koji smo ucitali iz css-a, u index.html dodajemo klasu gde je ucitana ta slika lazyload, a potom u css-u ono gde je ucitana ta slika premestamo u klasu .lazyloaded
// klasu lazyload za img, i data-srcset smo dodali i za prve dve slike