[![Build Status](https://secure.travis-ci.org/dbankier/bespoke-tishadow.png?branch=master)](https://travis-ci.org/dbankier/bespoke-tishadow)

# bespoke-tishadow

[tishadow](http://tishadow.yydigital.com) code execution for [Bespoke.js](http://markdalgleish.com/projects/bespoke.js)

If you don't know what TiShadow is, then the plugin won't be much help. Following the above link and learn...

## Download

Download the [production version][min] or the [development version][max], or use a [package manager](#package-managers).

[min]: https://raw.github.com/dbankier/bespoke-tishadow/master/dist/bespoke-tishadow.min.js
[max]: https://raw.github.com/dbankier/bespoke-tishadow/master/dist/bespoke-tishadow.js

## Usage

First, include both `bespoke.js` and `bespoke-tishadow.js` in your page.

Then, simply include the plugin when instantiating your presentation.

```js
bespoke.from('article', {
  tishadow: true
});
```

More points: 

* Add the `data-bespoke-tishadow` to your `<code/>` tags. Clicking on them will send the code to devices.
* The `TiShadow.repl` function will also be available and takes an function that will be sent to the repl.
* Logs will be displayed in the browser console.
* The plugin is designed to work with the tishadow server running on localhost on port 3000.

_Look at the demo code._

## Package managers

### Bower

```bash
$ bower install bespoke-tishadow
```

### npm

```bash
$ npm install bespoke-tishadow
```

The bespoke-tishadow npm package is designed for use with [browserify](http://browserify.org/), e.g.

```js
require('bespoke');
require('bespoke-tishadow');
```

## Credits

This plugin was built with [generator-bespokeplugin](https://github.com/markdalgleish/generator-bespokeplugin).

Also to @mcollina for the [bespoke-run](https://github.com/mcollina/bespoke-run) plugin which helped with help with
building this one. 

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
