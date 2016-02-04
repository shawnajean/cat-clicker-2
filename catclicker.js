$(function() {

  var model = {
    init: function() { // initializes model
      this.cats = [];
      this.cats.push( {url: "https://farm2.staticflickr.com/1126/625069434_db86b67df8_b.jpg",
      name: "Xuxa",
      clicks: 0 } );
      this.cats.push( {url: "https://farm3.staticflickr.com/2298/2290467335_89067c7b51_b.jpg",
      name: "Chewie",
      clicks: 0 } );
      this.cats.push( {url: "https://farm8.staticflickr.com/7401/16393044637_72e93d96b6_b.jpg",
      name: "Sunny",
      clicks: 0 } );
      this.cats.push( {url: "https://farm9.staticflickr.com/8208/8216315457_28762c496d_b.jpg",
      name: "Danny",
      clicks: 0 } );
      this.cats.push( {url: "https://farm6.staticflickr.com/5704/20443802614_d0b0c0b5c5_b.jpg",
      name: "Yoann",
      clicks: 0 } );
    },
    click: function( index ) {

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
    listen: function( class ) { // adds a listener for the specified class
      console.log("this happened - " + class );
    },
    clickList: function() {

    },
    clickCat: function() {

    },
    render: function() {

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

        octopus.listen( name );
      }
    }

  };

  var catView = {
    init: function() { // initializes cat view
      this.catsElem = $('#cats');
    },
    render: function( cat ) {

    }

  };

  octopus.init();
});
