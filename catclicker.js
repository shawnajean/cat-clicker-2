$(function() {

  var model = {
    init: function() {
      this.cats = [];
      this.cats.push( {url: "https://farm2.staticflickr.com/1126/625069434_db86b67df8_b.jpg",
      name: "Xuxa"} );
      this.cats.push( {url: "https://farm3.staticflickr.com/2298/2290467335_89067c7b51_b.jpg",
      name: "Chewie"} );
      this.cats.push( {url: "https://farm8.staticflickr.com/7401/16393044637_72e93d96b6_b.jpg",
      name: "Sunny"} );
      this.cats.push( {url: "https://farm9.staticflickr.com/8208/8216315457_28762c496d_b.jpg",
      name: "Danny"} );
      this.cats.push( {url: "https://farm6.staticflickr.com/5704/20443802614_d0b0c0b5c5_b.jpg",
      name: "Yoann"} );
    },
    click: function( index ) {

    }
  };

  var octopus = {
    init: function() {
      model.init();
      listView.init();
      catView.init();
    },
    getCats: function() {

    },
    clickList: function() {

    },
    clickCat: function() {

    },
    render: function() {

    }
  };

  var listView = {
    init: function() {
      var $listElem = $('#catlist');

      listView.render();
    },
    render: function( ) {
      var catList = octopus.getCats();
      var numCats = catList.length;

      for( var i = 0; i < numCats; i++ ) {
        name = catList[i].name;

        //add cat to sidebar list
        $listElem.append('<li><a class="' + name + '" href="#">' + name + '</a></li>');
      }
    }

  };

  var catView = {
    init: function() {
      var $catsElem = $('#cats');
    },
    render: function( cat ) {

    }

  };

  octopus.init();
});
