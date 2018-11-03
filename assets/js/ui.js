var pageBody = document.body;

function setDarkTheme() {
  pageBody.classList.add("dark-theme");
};

var header = document.querySelector(".site-header");
var menuOpenBtn = document.querySelector(".menu-icon");
var menuCloseBtn = document.querySelector(".menu-close-icon");

menuOpenBtn.addEventListener('click', function(){
  header.classList.add('menu-open');
});

menuCloseBtn.addEventListener('click', function(){
  header.classList.remove('menu-open');
});

var nav = document.querySelector(".site-nav");

function addShadow() {
  var scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    nav.classList.add('shadow');
  } else {
    nav.classList.remove('shadow');
  }
}

window.addEventListener('scroll', function(){
  addShadow();
});

window.onload = function() {
  addShadow();
};
