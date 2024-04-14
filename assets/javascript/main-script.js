// $(function(){
//     $("#header").load("header.html"); 
//     $("#footer").load("footer.html"); 
// });





// navbar color change ---------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.getElementById('#header');
  
  window.addEventListener('scroll', function () {
      // Get the scroll position
      const scrollPosition = window.scrollY;

      // Set the threshold for changing the navbar color (adjust as needed)
      const threshold = 400;

      // Calculate the opacity based on scroll position and threshold
      const opacity = Math.min(1, scrollPosition / threshold);

      // Change the navbar background color with opacity
      navbar.style.backgroundColor = `rgb(0, 18, 18, ${opacity})`;
  });
});

// navbar color change ---------------------------------------------------

const hamburger = document.getElementById('menu-btn');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
navLinks.classList.toggle('hide');
});






// const homeTab = document.querySelector('.home-item');
// homeTab.classList.add('nav-tab-gradient');

// const aboutTab = document.querySelector('.about-item');


// const contactTab = document.querySelector('.contact-item');


// function applyTab(){
//   homeTab.classList.add('nav-tab-gradient');
//   aboutTab.classList.remove('nav-tab-gradient');
//   contactTab.classList.remove('nav-tab-gradient');
// }

// function applyTab2(){
//   homeTab.classList.remove('nav-tab-gradient');
//   aboutTab.classList.add('nav-tab-gradient');
//   contactTab.classList.remove('nav-tab-gradient');
// }

// function applyTab3(){
//   homeTab.classList.remove('nav-tab-gradient');
//   aboutTab.classList.remove('nav-tab-gradient');
//   contactTab.classList.add('nav-tab-gradient');
// }


const homeTab = document.querySelector('.home-item');
const aboutTab = document.querySelector('.about-item');
const contactTab = document.querySelector('.contact-item');

function applyTab(tab) {
  // Remove the class from all tabs
  homeTab.classList.remove('nav-tab-gradient');
  aboutTab.classList.remove('nav-tab-gradient');
  contactTab.classList.remove('nav-tab-gradient');

  // Add the class to the clicked tab
  tab.classList.add('nav-tab-gradient');
}

homeTab.addEventListener('click', function() {
  applyTab(homeTab);
});

aboutTab.addEventListener('click', function() {
  applyTab(aboutTab);
});

contactTab.addEventListener('click', function() {
  applyTab(contactTab);
});
