[![Build Status](https://secure.travis-ci.org/ryanseddon/bespoke-dir.png?branch=master)](https://travis-ci.org/ryanseddon/bespoke-dir)

# bespoke-dir

Add a class to the slide parent element to let you know which direction the slides are going.

The bespoke parent element will initialise with `bespoke-dir-next` whenever you change slide it will update which direction you're going so you can do more advanced animations.

## Download

Download the [production version][min] or the [development version][max], or use a [package manager](#package-managers).

[min]: https://raw.github.com/ryanseddon/bespoke-dir/master/dist/bespoke-dir.min.js
[max]: https://raw.github.com/ryanseddon/bespoke-dir/master/dist/bespoke-dir.js

## Usage

First, include both `bespoke.js` and `bespoke-dir.js` in your page.

Then, simply include the plugin when instantiating your presentation.

```js
bespoke.horizontal.from('article', {
  dir: true
});
```

You can now change the style of the animation depending on which direction you're going.

### CSS

The following classes are available on your parent element.

<table>
   <tr>
    <td><b>bespoke-dir-next</b></td>
    <td>When you are going forwards</td>
   </tr>
   <tr>
    <td><b>bespoke-dir-prev</b></td>
    <td>When you are going backwards</td>
   </tr>
</table>

See [demo](demo) folder for a very simple example.

## Package managers

### Bower

```bash
$ bower install bespoke-dir
```

### npm

```bash
$ npm install bespoke-dir
```

The bespoke-dir npm package is designed for use with [browserify](http://browserify.org/), e.g.

```js
require('bespoke');
require('bespoke-dir');
```

## Credits

This plugin was built with [generator-bespokeplugin](https://github.com/markdalgleish/generator-bespokeplugin).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
