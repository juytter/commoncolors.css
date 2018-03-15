# Palette.css

A *petit* CSS color-scheme, easy to use.

## Demo and color references

-  <https://juytter.github.io/palette-css/>
- See [palette-vars.css](src/palette-vars.css) for color references  and tech details.

## Usage

### CSS vars

Use [palette-vars.css](css/palette-vars.css)

```css
@import 'palette-vars.css';
.warning { color : var(--red); }
.warning-alt { color : var(--red-pale); }
```

### Functional CSS lib

Use [palette.css](css/palette.css) or [minified](css/min/palette.min.css) (6 kb) lib to color text, background or border with className.

**Apply colors**

```html
<p class="red"></p>
<p class="red-pale"</p>
```

**Apply background colors**  (add a prefix `bg-` ) 

```html
/* white text on red background */
<div class="bg-red white"></div>
```

**Apply border colors**  (add a prefix `bd-` ) 

```html
/* red text with red borders */
<div class="bd-red red" style="border:1px solid;"></div>
```

## Build & contribute   

- [CONTRIBUTING](CONTRIBUTING.md)
- Sources [/src](/src)
- Dependencies [package.json](package.json)
- Build script :  Gulp ([gulpfile.js](gulpfile.js)), command line :  `gulp build`
