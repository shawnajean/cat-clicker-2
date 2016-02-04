$(function() {

  var model = {
    init: function() { // initializes model
      this.cats = [];
      this.cats.push( {
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
      });
    },
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
      model.init();
      listView.init();
      catView.init();
    },
    getCats: function() { // returns the array of cats
      return model.cats;
    },
    listListen: function( name ) { // adds a listener for the specified cat
      $('a.' + name ).click( function( name ) {
        return octopus.clickList( name );
      });
    },
    clickList: function( name ) {
      var catName = name.currentTarget.className;

      var index = model.getCat( catName );
      catView.render( model.cats[ index ] );
    },
    catListen: function( name ) {
      $('div.' + name ).click( function( name ) {
        return octopus.clickCat( name );
      });
    },
    clickCat: function( name ) {
      var catName = name.currentTarget.className;
      var index = model.getCat( catName );

      model.click( index );
      catView.updateScore( model.cats[index] );
    }
  };

  var listView = {
    init: function() { // initializes list view
      this.listElem = $('#catlist');

      listView.render();
    },
    render: function( ) { // renders list of cats
      var catList = octopus.getCats();
      var numCats = catList.length;

      for( var i = 0; i < numCats; i++ ) {
        name = catList[i].name;

        //add cat to sidebar list
        this.listElem.append('<li><a class="' + name + '" href="#">' + name + '</a></li>');

        octopus.listListen( name );
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
        octopus.clickCat();
      });
    },
    render: function( cat ) {
      this.catNameElem.text( cat.name );
      this.catImgElem.attr('src', cat.url );
      this.catScoreElem.text( 'Score: ' + cat.clicks );

      octopus.catListen( cat.name );
    },
    updateScore: function( cat ) {
      $('.score').text( cat.clicks );
    }
  };

  octopus.init();
});
