(function () {
  'use strict';

  CubxPolymer({
    is: 'side-nav',

    properties: {
      visibilityClass: {
        type: String,
        value: 'hidden'
      }
    },

    closeNav: function () {
      this.set('visibilityClass', 'hidden');
    },

    openNav: function () {
      this.set('visibilityClass', '');
    },

    modelAnchorChanged: function (newValue) {
      if (newValue !== 'left' && newValue !== 'right') { this.set('model.anchor', 'left'); }
    }
  });
}());
