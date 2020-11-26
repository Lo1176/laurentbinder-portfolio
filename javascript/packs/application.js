require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")
// require("letterfx")

import "bootstrap";

// homemade plugins
import initLetters from "../plugins/init_letters";
// import initDetailsLetters from "../plugins/init_details_letters";
import initSrollUp from "../plugins/init_scrollup";
import initOpacity from "../plugins/init_opacity";
import { init } from 'ityped'
// import initItyped from "../plugins/init_ityped";


// initDetailsLetters();
initLetters();
initSrollUp();
initOpacity();

// letterfx is not working
// $("#tagline").letterfx({"fx":"fly-right fly-bottom spin"});


// https://github.com/luisvinicius167/ityped
const devElement = document.querySelector('#dev')
// const devSuffixElement = document.querySelector('#dev-suffix')
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function firstSlogan(){
  await sleep(1000);
  init(devElement, { loop: false, typeSpeed:  90, startDelay: 1000, backDelay:  1500, disableBackTyping: false, strings: [ 'modernes', 'sur mesure', 'responsive', 'référencés', 'magnifico !', 'sur mesure' ]});
};

// setTimeout(function suffixSlogan() {
//      init(devSuffixElement, { loop: false, typeSpeed:  90, backDelay:  500, disableBackTyping: false, strings: [ 'modernes', 'sur mesure', 'responsive', 'référencés', 'magnifico !', 'sur mesure ;)' ] });

//   }, 8000);

firstSlogan();

// ---- function for hidding #navbar ----
// $.fn.followTo = function (pos) {
//     var $this = this,
//         $window = $(window);

//     $window.scroll(function (e) {
//         if ($window.scrollTop() > pos) {
//             $this.css({
//                 position: 'absolute',
//                 top: pos
//             });
//         } else {
//             $this.css({
//                 position: 'fixed',
//                 top: 0
//             });
//         }
//     });
// };

// $('#navbar').followTo(250);
