# 🌈✋Palette.css

A small CSS color scheme and *unambiguous* color names, at your fingertips.

-  [Introducing](https://juytter.github.io/palette-css/introducing.html) Palette.css
-  Demo / color chart:  <https://juytter.github.io/palette-css/>
-  Color scheme details: [palette--vars.css](src/palette--vars.css)

---

## Usage

#### CSS vars

The most obvious way to use *Palette.css* is using [css variables](http://devdocs.io/css/--*). Unfortunately , var is currently *experimental* and should be used with css preprocessors, such as [postcss](https://github.com/postcss/postcss).

Copy and use [palette--vars.css](css/palette--vars.css)

```css
@import 'palette--vars.css';
.warning { color : var(--red); }
.warning-alt { color : var(--red-pale); }
```

#### CSS libs, class utilities

While this may be considered as 'unsemantic', the best reliable way to integrate palette.css into a project is currently using a library of  atomic/functional classes :

- immutable classes with low specifications help to prevent side effects or conflicts with other CSS.
- CSS files, without dependencies and high compatibility (CSS Level 1) is the best foundation for maintaining and updating over time.

Copy and link [palette.css](css/palette.css) or [minified](css/min/palette.min.css) (4 ko) lib to color *text* and *background* with class names.

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

##### Palette-extra

Copy and link [palette-extra.css](css/palette-extra.css) or [minified](css/min/palette-extra.min.css) to color *borders* and *pseudo* (hover/focus) on elements with class names

```html
/* red border */
<p class="border bd-red"></p>
/* yellow color, yellow-black on hover */
<a class="yellow hv_yellow-black"></a>
```

##### Alt. individual CSS files

see. [/css](/css)


## Build & contribute   

- [Contributing](CONTRIBUTING.md)
- Sources [/src](/src)
- Tools and dependencies [package.json](package.json)
- Build script  [gulpfile.js](gulpfile.js),  command line :  `gulp build`
