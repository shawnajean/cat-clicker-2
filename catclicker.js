$(function() {

  var model = {

    init: function() {
      if (!localStorage.notes) {
        localStorage.notes = JSON.stringify([]);
      }
    },
    add: function() {

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
