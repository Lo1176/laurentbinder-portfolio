import { init } from 'ityped'


const initItyped = () => {
  const devElement = document.querySelector('#dev')

  init(devElement, { showCursor: true, startDelay: 20, typeSpeed:  90, backDelay:  500, disableBackTyping: false, strings: ['Création de sites Web modernes ', 'sur mesure', 'responsive', 'référencés', 'Magnifico !' ] });

}

export default initItyped;
