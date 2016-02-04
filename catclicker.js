$(function() {

  var model = {
    currentCat: null,
    cats: [
      {
        url: "https://farm2.staticflickr.com/1126/625069434_db86b67df8_b.jpg",
        name: "Xuxa",
        clicks: 0
      },{
        url: "https://farm3.staticflickr.com/2298/2290467335_89067c7b51_b.jpg",
        name: "Chewie",
        clicks: 0
      },{
        url: "https://farm8.staticflickr.com/7401/16393044637_72e93d96b6_b.jpg",
        name: "Sunny",
        clicks: 0
      },{
        url: "https://farm9.staticflickr.com/8208/8216315457_28762c496d_b.jpg",
        name: "Danny",
        clicks: 0
      },{
        url: "https://farm6.staticflickr.com/5704/20443802614_d0b0c0b5c5_b.jpg",
        name: "Yoann",
        clicks: 0
      }
    ]
  };

  var octopus = {
    init: function() { // initializes the app
      listView.init();
      catView.init();
      adminView.init();
    },
    getCats: function() { // returns the array of cats
      return model.cats;
    },
    setCurrentCat: function( cat ){
      model.currentCat = cat;
    },
    getCurrentCat: function() {
      return model.currentCat;
    },
    updateCat: function( newName, newImgURL, newClicks ) {

    },
    clickCat: function() {
      model.currentCat.clicks++;

      catView.updateScore( model.currentCat );
    }
    //add functions for handling three buttons
  };

  var listView = {
    init: function() { // initializes list view
      this.listElem = $('#catlist');

      listView.render();
    },
    render: function( ) { // renders list of cats
      var cat, i;
      var cats = octopus.getCats();
      var numCats = cats.length;

      for( i = 0; i < numCats; i++ ) {
        cat = cats[i];

        //add cat to sidebar list
        this.listElem.append('<li><a id="' + cat.name + '" href="#">' + cat.name + '</a></li>');

        $('#' + cat.name ).on('click', (function(catcopy) {
          return function() {
            octopus.setCurrentCat( catcopy );
            catView.render();
          };
        })(cat));
      }
    }
  };

  var catView = {
    init: function() { // initializes cat view
      this.catElem = $('#cat');
      this.catNameElem = $('#cat-name');
      this.catImgElem = $('#cat-img');
      this.catScoreElem = $('#score');

      this.catImgElem.on('click', function(e){
        return octopus.clickCat();
      });
    },
    render: function( cat ) {
      cat = octopus.getCurrentCat();
      this.catNameElem.text( cat.name );
      this.catImgElem.attr('src', cat.url );
      this.catScoreElem.text( 'Score: ' + cat.clicks );
    },
    updateScore: function( cat ) {
      this.catScoreElem.text( 'Score: ' + cat.clicks );
    }
  };

  var adminView = {
    init: function() {
      this.adminFormElem = $('#admin-settings');
      this.catNameElem = $('input.cat-name');
      this.catURLElem = $('input.cat-url');
      this.catClicksElem = $('input.cat-clicks');

      this.cancel = $('input.cancel');
      this.save = $('input.save');

      this.cancel.on('click', function() {
        return function() {
          adminView.notify( "cancel" );
          adminView.resetForm();
        }
      });

      this.save.on('click', (function( newName, newImgURL, newClicks ) {
        return function( newName, newImgURL, newClicks ) {
          octopus.updateCat( newName, newImgURL, newClicks );
          adminView.notify( "save" );
          this.adminFormElem.toggle();
        }
      })( this.catNameElem.val(), this.catURLElem.val(), this.catClicksElem.val() ));

      this.adminToggle = $('button.admin-toggle');

      this.adminToggle.on('click', function() {
        return this.adminFormElem.toggle();
      });
    },
    resetForm: function() {

    },
    notify: function( notif ){

    }
  };

  octopus.init();
});
