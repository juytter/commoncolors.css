# Common Colors CSS 🌈✋

A small CSS color scheme and *intuitive* color names, at your fingertips.
Demo :  <https://juytter.github.io/common-colors-css/>

---

## Download

- [Last version (zip)](dist/common-colors-css-lastest.zip)
- [Releases](https://github.com/juytter/common-colors-css/releases)

## Principe

This color scheme makes it easy to represent colors by naming them. No weird color names like *papayawhip* or b*lue dodger*, or cryptic color codes # 456788 ... 

The color scheme  is a *design pattern* consisting of 10 main colors (+ black & white) x 4 colors for each representing a shade of brightness. 42 colors easily accessible to use, reuse and share into a project.

##### Main colors

`black, white, gray, red, orange, yellow, green, cyan, blue, violet, fuchsia, pink`

##### Brightness modifiers

`-pale, -light, -dark, -black`

##### Examples

`gray-pale, red, pink-dark  ...`

## Usage

#### CSS vars

Use [common-colors--vars.css](css/common-colors--vars.css), and [CSS variables](http://devdocs.io/css/--*)

```css
@import 'common-colors--vars.css';
.warning { color : var(--red); }
.warning-alt { color : var(--red-pale); }
```

#### CSS color class libs

Use [common-colors.css](css/common-colors.css) or [minified](css/min/common-colors.min.css) (4 Ko) lib to color *texts*,  *backgrounds* and *borders* with class names.

##### Text colors

```html
<p class="red"></p>
<p class="red-pale"</p>
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

Use [common-colors-extra.css](css/common-colors-extra.css) or [minified](css/min/common-colors-extra.min.css) to color *pseudo* elements (hover)  with class names.

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

