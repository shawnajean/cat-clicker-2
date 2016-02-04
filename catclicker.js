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
      adminView.resetForm();
    },
    getCurrentCat: function() {
      return model.currentCat;
    },
    updateCat: function( newCat ) {
      model.currentCat = newCat;
      
      catView.updateScore();
    },
    clickCat: function() {
      model.currentCat.clicks++;

      catView.updateScore();
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
        })(cat)
        );
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
    updateScore: function() {
      cat = octopus.getCurrentCat();

      this.catScoreElem.text( 'Score: ' + cat.clicks );
    }
  };

  var adminView = {
    init: function() {
      var newCat;
      this.adminFormElem = $('#admin-settings');
      this.adminFormElem.toggle();

      this.adminToggle = $('button.admin-toggle');

      this.adminToggle.click( (function() {
        return function() {
          adminView.resetForm();
          adminView.toggleForm();
        };
      })(  ));

      this.catNameElem = $('input.cat-name');
      this.catURLElem = $('input.cat-URL');
      this.catClicksElem = $('input.cat-clicks');

      this.cancel = $('input.cancel');
      this.save = $('input.save');

      this.cancel.on('click', function() {
        return function() {
          adminView.notify( "cancel" );
          adminView.resetForm();
        }
      });

      nameCopy = this.catNameElem;

      this.save.on('click', (function( newName, newImgURL, newClicks ) {
        return function( newName, newImgURL, newClicks ) {
          newCat = adminView.getNewVals();
          octopus.updateCat( newCat );

          adminView.notify( "save" );
          adminView.toggleForm();
        }
      })( this.catNameElem.value, this.catURLElem.value, this.catClicksElem.value )
      );
    },
    getNewVals: function() {
      return {
        url: this.catURLElem.val(),
        name: this.catNameElem.val(),
        clicks: this.catClicksElem.val()
      };
    },
    resetForm: function() {
      var cat = octopus.getCurrentCat();

      if( cat === null ){
        this.save.attr('value', "Add New Cat");
      } else {
        this.save.attr('value', "Save");
        this.catNameElem.attr('value', cat.name );
        this.catURLElem.attr('value', cat.url );
        this.catClicksElem.attr('value', cat.clicks );
      }
    },
    toggleForm: function() {
      this.adminFormElem.toggle();
    },
    notify: function( notif ){

    }
  };

  $(document).ready( octopus.init() );
});
