$(function() {

  var model = {
    init: function() {
      this.cats = [];
    },
    add: function( cat ) {
      cats.push( cat );
    },
    click: function( index ) {

    }
  };

  var octopus = {
    init: function() {
      model.init();
      listView.init();
      playView.init();
    },
    addCats: function() {

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

    },
    render: function() {

    }

  };

  var playView = {
    init: function() {

    },
    render: function( cat ) {

    }

  };

  octopus.init();
});
