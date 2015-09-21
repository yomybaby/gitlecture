/*!
 * bespoke-indexfinger v0.1.2
 * https://github.com/joelpurra/bespoke-indexfinger
 *
 * Copyright 2013, Joel Purra
 * This content is released under the MIT license
 */

(function(bespoke, convenient, ns, pluginName, undefined) {
    "use strict";

    var cv = convenient.builder(pluginName),

        plugin = function(deck) {
            var off = {},

                activeSlide = null,

                activeSlideIndex = -1,

                unboundActiveSlideDeckMethods = {
                    // Plugin functions expect to be executed in a deck context
                    enableActiveSlideListener: function() {
                        off.saveActiveSlide = this.on("activate", unboundActiveSlideDeckMethods.saveActiveSlide.bind(this));
                    },

                    saveActiveSlide: function(e) {
                        activeSlide = e.slide;
                        activeSlideIndex = e.index;
                    },

                    getActiveSlide: function() {
                        return activeSlide;
                    },

                    getActiveSlideIndex: function() {
                        return activeSlideIndex;
                    }
                },

                registerDeckExtensions = function() {
                    deck.getActiveSlide = unboundActiveSlideDeckMethods.getActiveSlide.bind(deck);
                    deck.getActiveSlideIndex = unboundActiveSlideDeckMethods.getActiveSlideIndex.bind(deck);
                },

                enable = function() {
                    unboundActiveSlideDeckMethods.enableActiveSlideListener.call(deck);
                },

                init = function() {
                    registerDeckExtensions();
                    enable();
                };

            init();
        };

    if (ns[pluginName] !== undefined) {
        throw cv.generateErrorObject("The " + pluginName + " plugin has already been loaded.");
    }

    ns[pluginName] = plugin;
}(bespoke, bespoke.plugins.convenient, bespoke.plugins, "indexfinger"));
