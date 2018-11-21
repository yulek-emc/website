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


// Illu lightbox

window.addEventListener("load", function() {

  var thumbnail = document.querySelectorAll(".illu-thumbnail");
  var fullImage = document.querySelectorAll(".illu-big");

  function lockScroll() {
    document.body.classList.add("locked");
  }

  function unlockScroll() {
    document.body.classList.remove("locked");
  }

  function highlightImage(imageClickEvent) {

    var clickedItem = imageClickEvent.currentTarget;
    var itemID = clickedItem.getAttribute("illu-id");
    var associatedHighlight = document.querySelector("#id" + itemID);

    associatedHighlight.classList.add("active");

    lockScroll();
  };

  function closeImage() {
    for (var i = 0; i < fullImage.length; i++) {
      fullImage[i].classList.remove("active");
    }
    unlockScroll();
  }

  for (i = 0; i < thumbnail.length; i++) {
     thumbnail[i].addEventListener("click", function(e) {
      closeImage();
      highlightImage(e);
     })
  }

  for (i = 0; i < fullImage.length; i++) {
    fullImage[i].addEventListener("click", closeImage);
  }
});



// illustration.addEventListener('click', function(e) {
//   highlightIllu(e);
// });
