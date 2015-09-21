[![Build Status](https://secure.travis-ci.org/joelpurra/bespoke-indexfinger.png?branch=master)](https://travis-ci.org/joelpurra/bespoke-indexfinger)

# bespoke-indexfinger

Keep track of the active slide in [Bespoke.js][bespoke.js]. This plugin is targeted towards plugin developers, not everyday bespoke users looking to make a nice presentation.

## Download

Download the [production version][min] or the [development version][max], or use a [package manager](#package-managers).

[min]: https://raw.github.com/joelpurra/bespoke-indexfinger/master/dist/bespoke-indexfinger.min.js
[max]: https://raw.github.com/joelpurra/bespoke-indexfinger/master/dist/bespoke-indexfinger.js

## Usage

First, include `bespoke.js`, `bespoke-convenient.js` and `bespoke-jumpy.js` in your page.

Then, simply include the plugin when instantiating your presentation - and make sure to insert `convenient: true` and `indexfinger: true` before any other plugin that might use indexfinger.


```js
bespoke.horizontal.from('article', {
  convenient: true,
  indexfinger: true
});
```

In your plugin, you can easily check which slide is active.

```js
// Get the slide object, which is the slide DOM object/element
var activeSlide = deck.getActiveSlide();

// Get the index, which is the index in deck.slides
var activeSlideIndex = deck.getActiveSlideIndex();
```

## Package managers

### Bower

```bash
$ bower install bespoke-indexfinger
```

### npm

```bash
$ npm install bespoke-indexfinger
```

The bespoke-indexfinger npm package is designed for use with [browserify](http://browserify.org/), e.g.

```js
require('bespoke');
require('bespoke-convenient');
require('bespoke-indexfinger');
```


## Credits

[Mark Dalgleish](http://markdalgleish.com/) for [bespoke.js][bespoke.js] and related tools. This plugin was built with [generator-bespokeplugin](https://github.com/markdalgleish/generator-bespokeplugin).

Siemar, [javiersierra on flickr](https://secure.flickr.com/photos/javiersierra/), for his photo [Marcapagina](https://secure.flickr.com/photos/javiersierra/4458644494/) ([CC BY 2.0](https://creativecommons.org/licenses/by/2.0/)).

My best friend, [bespoke-convenient](https://github.com/joelpurra/bespoke-convenient), for continued support - rain and shine. I love you, man.


## License

Copyright (c) 2013, [Joel Purra](http://joelpurra.com/) All rights reserved.

When using bespoke-indexfinger, comply to the [MIT license](http://joelpurra.mit-license.org/2013). Please see the LICENSE file for details, and the [MIT License on Wikipedia](http://en.wikipedia.org/wiki/MIT_License).

[bespoke.js]: https://github.com/markdalgleish/bespoke.js


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/joelpurra/bespoke-indexfinger/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

