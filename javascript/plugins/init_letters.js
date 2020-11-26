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

export default initLetters;
