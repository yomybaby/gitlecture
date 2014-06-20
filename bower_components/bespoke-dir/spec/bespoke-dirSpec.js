(function() {
  'use strict';

  describe("bespoke-dir", function() {

    var deck,

      createDeck = function() {
        var parent = document.createElement('article');
        for (var i = 0; i < 10; i++) {
          parent.appendChild(document.createElement('section'));
        }

        deck = bespoke.from(parent, {
          dir: true
        });
      };

    createDeck();

    describe("deck.init", function() {

      it("should initialise parent container with 'bespoke-dir-next' class", function() {
        expect(deck.parent.classList.contains('bespoke-dir-next')).toBe(true);
        expect(deck.parent.classList.contains('bespoke-dir-prev')).toBe(false);
      });

    });

    describe("deck.slide", function() {

      it("should keep parent container with 'bespoke-dir-next' class", function() {
        deck.slide(1);
        expect(deck.parent.classList.contains('bespoke-dir-next')).toBe(true);
        expect(deck.parent.classList.contains('bespoke-dir-prev')).toBe(false);
      });

      it("should change add 'bespoke-dir-prev' class to container", function() {
        deck.slide(0);
        expect(deck.parent.classList.contains('bespoke-dir-prev')).toBe(true);
        expect(deck.parent.classList.contains('bespoke-dir-next')).toBe(false);
      });

    });

  });

}());
