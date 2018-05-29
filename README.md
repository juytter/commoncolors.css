# Common Colors CSS 🌈✋

A small CSS color scheme and *intuitive* color names, at your fingertips.
Demo & color chart:  <https://juytter.github.io/common-colors-css/>

---

## Benefit

Web color names are weird ([Dodger blue](http://www.latimes.com/sports/dodgers/la-sp-how-dodger-blue-became-part-of-the-internet-20171030-story.html), Chartreuse … ) and color codes are counter intuitive for  using colors in a web project and sharing them with people. Common Colors provides css *variables* and *lightweight css libraries* designed with a simple and intuitive pattern to share, use and reuse colors intuitively.

## Download

- [Last version (zip)](dist/common-colors-css-lastest.zip)
- [Releases](https://github.com/juytter/common-colors-css/releases)

## Usage

#### CSS vars

Use [common-colors--vars.css](css/common-colors—vars.css), and [CSS variables](http://devdocs.io/css/--*)

```css
@import 'common-colors--vars.css';
.warning { color : var(--red); }
.warning-alt { color : var(--red-pale); }
```

#### CSS libs

The bullet-proof way to use Common Colors : all browsers support (css level 1), no dependencies, immutable css classes ...

Use [common-colors.css](css/common-colors.css) or [minified](css/min/common-colors.min.css) (4 Ko) lib to color *text* and *background* with class names.

##### Apply colors

```html
<p class="red"></p>
<p class="red-pale"</p>
```

##### Apply background colors  (add a prefix `bg-` )

```html
/* white on red background */
<div class="bg-red white"></div>
```

##### Lib - Extra

Use [common-colors-extra.css](css/common-colors-extra.css) or [minified](css/min/common-colors-extra.min.css) to color *borders* and *pseudo* elements (hover/focus)  with class names.

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

