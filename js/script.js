document.addEventListener('DOMContentLoaded', function() {

  // ----- dropdown menu -----
  // variables
  var pageNavMenu = document.querySelectorAll(".page-nav .nav-menu-list");
  var mainSlider = document.getElementById("mainSlider");

  // mouse events
  pageNavMenu.forEach(function(li) {
      li.addEventListener('mouseover', function() {
        var pageNavSubMenu = this.querySelector(".page-nav-sub");
        if (pageNavSubMenu != null) {
          pageNavSubMenu.classList.add('show'); // .show shows sub-menu
          mainSlider.classList.add('set-behind'); // .set-behind sets sub-menu on top
        }
      });
      li.addEventListener('mouseout', function() {mainSlider.classList.add('behind');
        var pageNavSubMenu = this.querySelector(".page-nav-sub");
        if (pageNavSubMenu != null) {
          pageNavSubMenu.classList.remove('show');
          mainSlider.classList.remove('set-behind');
        }
      });
  });

  // ----- hiding info-box text ------
  // variables
  var infoBoxes = document.querySelectorAll('.info-box');

  // mouse events
  infoBoxes.forEach(function(box) {
    box.addEventListener('mouseover', function() {
      var infoBoxBlock = this.querySelector('.info-box-cnt');
      var infoBoxImage = this.querySelector('.info-box-img');
      infoBoxBlock.classList.add('hide'); // .hide hides blocks
      infoBoxImage.classList.add('enlarge'); // .enlarge makes images slightly bigger
    });
    box.addEventListener('mouseout', function() {
      var infoBoxBlock = this.querySelector('.info-box-cnt');
      var infoBoxImage = this.querySelector('.info-box-img');
      infoBoxBlock.classList.remove('hide');
      infoBoxImage.classList.remove('enlarge');
    });
  });

  // ----- SLIDER ------
  // variables
  var mainSliderSlides = mainSlider.querySelectorAll('.main-slider-slide');
  var btnPrev = mainSlider.querySelector('.main-slider-prev');
  var btnNext = mainSlider.querySelector('.main-slider-next');

  // slide's index
  var index = 0;
  // added class .active to show the first slide
  mainSliderSlides[index].classList.add('active');

  // changing slides with mouse events
  btnPrev.addEventListener('click', function() {
    mainSliderSlides[index].classList.remove('active');
    index ++;
    if (index < 0) {
      index = mainSliderSlides[mainSliderSlides.length - 1];
    }
    if (index >= mainSliderSlides.length) {
      index = 0;
    }
    mainSliderSlides[index].classList.add('active');
    });

  btnNext.addEventListener('click', function() {
    mainSliderSlides[index].classList.remove('active');
    index ++;
    if (index < 0) {
      index = mainSliderSlides[mainSliderSlides.length - 1];
    }
    if (index >= mainSliderSlides.length) {
      index = 0;
    }
    mainSliderSlides[index].classList.add('active');
  });

  

});
