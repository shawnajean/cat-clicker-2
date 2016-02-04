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
    getCat: function() {

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
    listListen: function( name ) { // adds a listener for the specified cat
      $('a.' + name ).click( function( name ) {
        return octopus.clickList( name );
      });
    },
    clickList: function( name ) {
      var catName = name.currentTarget.className;

      var cat = model.getCat( name );
      catView.render( cat );
    },
    catListen: function( name ) {
      $('div.' + name ).click( function( name ) {
        return octopus.clickCat( name );
      });
    },
    clickCat: function( name ) {
      console.log("click");
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
      this.catsElem = $('#cats');
    },
    render: function( cat ) {
      this.catsElem.append('<div class="catpic ' + cat.name + '"><h3>' + cat.name + '</h3><img src=' + cat.url + '/><p>Score: <span>' + cat.clicks +'</span></p></div>');

      octopus.catListen( cat.name );
    }
  };

  octopus.init();
  catView.render(model.cats[0]);
});
