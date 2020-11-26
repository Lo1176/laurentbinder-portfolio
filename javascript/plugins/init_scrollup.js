// When the user scrolls down 400px from the top of the document, it shows the scroll button

window.onscroll = scrollFunction;

function scrollFunction() {
  const state = document.documentElement.scrollTop > 400;
  document.querySelector('.scrollup').style.display = state ? 'block' : 'none';
};

// When the user clicks on the button, scroll to the top of the document
export default scrollFunction;
