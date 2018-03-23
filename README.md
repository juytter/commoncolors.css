# Palette.css

A small CSS color scheme with *unambiguous* color names, at your fingertips.

-  [Introducing](https://juytter.github.io/palette-css/introducing.html) Palette.css
-  Demo / test :  <https://juytter.github.io/palette-css/>
-  Color scheme details: [palette-vars.css](src/palette-vars.css)

---

## Usage

#### CSS vars

Use [palette-vars.css](css/palette-vars.css)

```css
@import 'palette-vars.css';
.warning { color : var(--red); }
.warning-alt { color : var(--red-pale); }
```

#### CSS lib, class utilities

Use [palette.css](css/palette.css) or [minified](css/min/palette.min.css) (4 ko) lib to color text and background with class utilities.

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


## Build & contribute   

- [Contributing](CONTRIBUTING.md)
- Sources [/src](/src)
- Tools and dependencies [package.json](package.json)
- Build script  [gulpfile.js](gulpfile.js),  command line :  `gulp build`
