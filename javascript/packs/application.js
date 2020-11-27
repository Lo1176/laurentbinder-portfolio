// require("@rails/ujs").start()
// require("@rails/activestorage").start()
// require("channels")

// import "bootstrap";

// homemade plugins
// import initLetters from "../plugins/init_letters";
// import initSrollUp from "../plugins/init_scrollup";
// import initOpacity from "../plugins/init_opacity";
// import { init } from 'ityped'


// Wrap every letter in a span
const initLetters = () => {
  var textWrapper = document.querySelector('#mvlt .moving-letters .letters');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime.timeline({loop: false})
    .add({
      targets: '#mvlt .moving-letters .letter',
      rotateY: [-90, 10],
      duration: 6300,
      delay: (el, i) => 45 * i
    }).add({
      targets: '#mvlt .moving-letters',
      opacity: 1,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });
}
// initLetters();

// When the user scrolls down 400px from the top of the document, it shows the scroll button
window.onscroll = scrollFunction;
function scrollFunction() {
  const state = document.documentElement.scrollTop > 400;
  document.querySelector('.scrollup').style.display = state ? 'block' : 'none';
};
scrollFunction();

// text in banner get opacit when scroll down
const initOpacity = () => {
  $(document).ready(function(){
    $(window).scroll(function(){
      $('#ban').css("opacity", 1 - $(window).scrollTop()/700)
    })
  })
};
initOpacity();

// letterfx is not working
// $("#tagline").letterfx({"fx":"fly-right fly-bottom spin"});


// https://github.com/luisvinicius167/ityped
const devElement = document.querySelector('#dev')
// const devSuffixElement = document.querySelector('#dev-suffix')
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
const initItyped = () => {
  const devElement = document.querySelector('#dev')

  init(devElement, { showCursor: true, startDelay: 20, typeSpeed:  90, backDelay:  500, disableBackTyping: false, strings: ['Création de sites Web modernes ', 'sur mesure', 'responsive', 'référencés', 'Magnifico !' ] });
}
async function firstSlogan(){
  await sleep(1000);
  init(devElement, { loop: false, typeSpeed:  90, startDelay: 1000, backDelay:  1500, disableBackTyping: false, strings: [ 'modernes', 'sur mesure', 'responsive', 'référencés', 'magnifico !', 'sur mesure' ]});
};


// firstSlogan();
