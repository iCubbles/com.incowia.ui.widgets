(function () {
  'use strict';
  CubxPolymer({
    is: 'dropdown-menu',

    properties: {
      hideDropDown: {
        type: Boolean,
        value: true
      }
    },

    getAlignment: function (align) {
      return align === 'right' ? 'align-right' : '';
    },

    toggleDropdown: function () {
      this.set('hideDropDown', !this.get('hideDropDown'));
    }
  });
}());
