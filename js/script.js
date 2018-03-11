document.addEventListener('DOMContentLoaded', function() {

  // ----- GLOBAL VARIABLES -----

  var pageNavMenu = document.querySelectorAll(".page-nav .nav-menu-list");
  var mainSlider = document.getElementById("mainSlider");

  var infoBoxes = document.querySelectorAll('.info-box');

  var mainSliderSlides = mainSlider.querySelectorAll('.main-slider-slide');
  var btnPrev = mainSlider.querySelector('.main-slider-prev');
  var btnNext = mainSlider.querySelector('.main-slider-next');

  var application = document.querySelector('.application');

  var listOfPanels = application.querySelectorAll('.list_panel');
  var listArrow = application.querySelectorAll('.list_arrow');

  var summaryPanel = application.querySelector('.summary_panel');
  var panelLeft = summaryPanel.querySelector('.panel_left');
  var panelRight = summaryPanel.querySelector('.panel_right');

  var summary = application.querySelector('.sum strong');

  var checkbox = application.querySelector('input[type="checkbox"]');

  var transport = panelLeft.querySelector('.transport');
  var transportValue = panelRight.querySelector('.transport');


  // ----- DROPDOWN MENU -----

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


  // ----- HIDING INFO-BOX TEXT ------

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

  // auxiliary slide's index variable
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


  // ----- CALCULATOR ------

  // summing up - auxiliary variable
  var sum = 0;

  // dropping down list after clicking an arrow
  listArrow.forEach(function(arrow) {
    arrow.addEventListener('click', function() {
      var dropDownList = this.parentElement;
      var listPanel = dropDownList.querySelector('.list_panel');
      listPanel.classList.toggle('drop-down');
      this.classList.toggle('arrow-up');

      // choosing a single item from drop-down list
      var listPanelItems = listPanel.querySelectorAll('li');

      listPanelItems.forEach(function(panelItem) {
        panelItem.addEventListener('click', function() {
          var listLabel = dropDownList.firstElementChild;
          listLabel.innerText = this.innerText;
          listLabel.style.color = '#666';

          // summary left panel local variables
          var title = panelLeft.querySelector('.title');
          var color = panelLeft.querySelector('.color');
          var pattern = panelLeft.querySelector('.pattern');
          // summary right panel local variables
          var titleValue = panelRight.querySelector('.title');
          var colorValue = panelRight.querySelector('.color');
          var patternValue = panelRight.querySelector('.pattern');

          // setting values into summary panel
          if (this.className === 'chair') {
            sum -= Number(titleValue.innerText);
            title.innerText = 'Chair ' + listLabel.innerText;
            titleValue.innerText = this.dataset.chairprice;
            sum += Number(titleValue.innerText);
            summary.innerText = sum + ' zł';
          }
          if (this.className === 'color') {
            sum -= Number(colorValue.innerText);
            color.innerText = 'k. ' + listLabel.innerText;
            colorValue.innerText = '0';
            sum += Number(colorValue.innerText);
            summary.innerText = sum + ' zł';
          }
          if (this.className === 'fabric') {
            sum -= Number(patternValue.innerText);
            pattern.innerText = listLabel.innerText;
            patternValue.innerText = this.dataset.fabricprice;
            sum += Number(patternValue.innerText);
            summary.innerText = sum + ' zł';
          }

          // hiding drop-down menu after choosing panel item
          listOfPanels.forEach(function(panel) {
            if (panel.classList.contains('drop-down')) {
              listPanel.classList.toggle('drop-down');
              arrow.classList.toggle('arrow-up');
            }
          })

        });
      });

    });
  });

  //checking transport checkbox

  //setting transport value into summary panel
  checkbox.addEventListener('click', function() {
    if (checkbox.checked) {
      transport.innerText = 'transport';
      transportValue.innerText = checkbox.dataset.transportprice;
      sum += Number(transportValue.innerText);
      summary.innerText = sum + ' zł';
    } else {
      sum -= Number(transportValue.innerText);
      summary.innerText = sum + ' zł';
      transport.innerText = null;
      transportValue.innerText = null;
    }
  })

});
