# Common Colors CSS 🌈✋

A small, intuitive css color scheme at your fingertips

---
## Principe

A color scheme easy to use and memorize, with no abstraction (color code), exotic or confusing names (dodger blue, Papaya Whip ...)

## Demo

<https://juytter.github.io/common-colors-css/>

## Download

- [Last version (zip)](dist/common-colors-css-lastest.zip)
- [Releases](https://github.com/juytter/common-colors-css/releases)

## Usage

#### Main colors

`black, white, gray, red, orange, yellow, green, cyan, blue, violet, fuchsia, pink`

#### Brightness modifiers

`-pale, -light, -dark, -black`

#### Examples

`gray-pale, red, pink-dark  ...`

#### CSS variables

Use [common-colors--vars.css](css/common-colors--vars.css). see [CSS variables](http://devdocs.io/css/--*)

```css
@import 'common-colors--vars.css';
.warning { color : var(--red); }
.warning-alt { color : var(--red-pale); }
```

#### CSS color class libs

Use [common-colors.css](css/common-colors.css) / [minified](css/min/common-colors.min.css) (4 Ko) to color *texts*,  *backgrounds* and *borders* with class names.

##### Text colors

```html
<p class="red"></p>
<p class="red-pale"></p>
```

#####  background colors  (add a prefix `bd-` )

```html
/* white on red background */
<div class="bg-red"></div>
```

#####  border colors  (add a prefix `bg-` )

```html
/* red borders */
<div class="border bd-red"></div>
```

##### Lib - Extra

Use [common-colors-extra.css](css/common-colors-extra.css) / [minified](css/min/common-colors-extra.min.css) to color *pseudo* (hover) elements  with class names.

```html
/* red border */
<p class="border bd-red"></p>
/* yellow color, yellow-black on hover */
<a class="yellow hv_yellow-black"></a>
```

##### Alt.  CSS files

See. [/css](/css)

## Build & contribute   

- [Contributing](CONTRIBUTING.md)
- Sources [/src](/src)
- Tools and dependencies [package.json](package.json)
- Build script  [gulpfile.js](gulpfile.js),  command line :  `gulp build`
