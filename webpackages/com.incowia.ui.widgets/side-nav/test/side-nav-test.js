/* global describe,it,before,after,beforeEach,afterEach,Polymer */
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
        sideNav.addEventListener('dom-change', function () { done(); });
      });
      it('should cause <side-nav> element to render each item in given array properly', function () {
        var item = Polymer.dom(sideNav.root).querySelectorAll('a[href="#item1"]');
        item.should.have.lengthOf(1);
        item[0].textContent.should.equal('Item 1');
        item = Polymer.dom(sideNav.root).querySelectorAll('a[href="#item2"]');
        item.should.have.lengthOf(1);
        item[0].textContent.should.equal('Item 2');
        item = Polymer.dom(sideNav.root).querySelectorAll('a[href="#item3"]');
        item.should.have.lengthOf(1);
        item[0].textContent.should.equal('Item 3');
      });
    });
    describe('Slot "title"', function () {
      before(function () {
        sideNav.setTitle('Title-test');
      });
      it('should display given value as title on top of <side-nav>', function () {
        Polymer.dom(sideNav.root).querySelectorAll('.title')[0].textContent.should.equal('Title-test');
      });
    });
  });
});
