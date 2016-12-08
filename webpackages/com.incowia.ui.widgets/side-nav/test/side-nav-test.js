/* global describe,it,before,after,beforeEach,afterEach */
'use strict';

describe('<side-nav>', function () {
  this.timeout(7000);
  var sideNav;
  before(function (done) {
    document.body.addEventListener('cifReady', function () {
      sideNav = document.getElementsByTagName('side-nav')[0];
      done();
    });
  });

  describe('Input slots', function () {
    describe('Slot "items"', function () {
      before(function (done) {
        sideNav.setItems([
          { name: 'item1', displayName: 'Item 1', target: '#item1' },
          { name: 'item2', displayName: 'Item 2', target: '#item2' },
          { name: 'item3', displayName: 'Item 3', target: '#item3' }
        ]);
        setTimeout(done, 500); // TODO: Can we determine when polymer dom-repeat has finished manipulating dom?
      });
      it('should cause <side-nav> element to render each item in given array properly', function () {
        console.log(Polymer.dom(sideNav.root).querySelector('a[href="#item1"]'));
        Polymer.dom(sideNav.root).querySelectorAll('a[href="#item1"]').should.have.lengthOf(1);
        Polymer.dom(sideNav.root).querySelectorAll('a[href="#item2"]').should.have.lengthOf(1);
        Polymer.dom(sideNav.root).querySelectorAll('a[href="#item3"]').should.have.lengthOf(1);
      });
    });
  });
});
