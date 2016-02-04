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
    ],
    getCat: function( name ) {
      var index = this.cats.findIndex( function( element, index, array ) {
        if( element.name !== name ) {
          return false;
        }
        return true;
      });

      return index;
    },
    click: function( index ) {
      this.cats[index].clicks++;
    }
  };

  var octopus = {
    init: function() { // initializes the app
      listView.init();
      catView.init();
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
    clickList: function( name ) {
      var catName = name.currentTarget.className;

      var index = model.getCat( catName );
      octopus.setCurrentCat( model.cats[index] );
      catView.render( model.cats[ index ] );
    },
    clickCat: function() {
      model.currentCat.clicks++;

      catView.updateScore( model.currentCat );
    }
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

  octopus.init();
});
