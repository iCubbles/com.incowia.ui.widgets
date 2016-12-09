/* global describe,it,before,after,beforeEach,afterEach,Polymer */
'use strict';

describe('<dropdown-menu>', function () {
  this.timeout(7000);
  var dropdownMenu;
  before(function (done) {
    document.body.addEventListener('cifReady', function () {
      dropdownMenu = document.getElementsByTagName('dropdown-menu')[0];
      done();
    });
  });

  describe('Slot "items"', function () {
    before(function (done) {
      dropdownMenu.setItems([
        { name: 'item1', displayName: 'Item 1', target: '#item1' },
        { name: 'item2', displayName: 'Item 2', target: '#item2' },
        { name: 'item3', displayName: 'Item 3', target: '#item3' }
      ]);
      dropdownMenu.addEventListener('dom-change', function () { done(); });
    });
    it('should render given array of items properly in <dropdown-menu>', function () {
      var items = Polymer.dom(dropdownMenu.root).querySelectorAll('a[id="item1"]');
      items.should.have.lengthOf(1);
      items[0].getAttribute('href').should.equal('#item1');
      items[0].textContent.should.equal('Item 1');
      items = Polymer.dom(dropdownMenu.root).querySelectorAll(('a[id="item2"]'));
      items.should.have.lengthOf(1);
      items[0].getAttribute('href').should.equal('#item2');
      items[0].textContent.should.equal('Item 2');
      items = Polymer.dom(dropdownMenu.root).querySelectorAll(('a[id="item3"]'));
      items.should.have.lengthOf(1);
      items[0].getAttribute('href').should.equal('#item3');
      items[0].textContent.should.equal('Item 3');
    });
  });
});
