# Palette.css

*Petite* CSS color palette. Easy to use.

#### Goal and principe 

Colors naming convention,  [hsl](https://en.wikipedia.org/wiki/HSL_and_HSV)  design-system, small color palette help designers and teams to memorize, use and compose with colors in CSS more easily.

#### Demo and color references

-  <https://juytter.github.io/palette-css/>
- See [palette-vars.css](src/palette-vars.css) for color references  and details.

## Usage

#### CSS vars

Use [palette-vars.css](css/palette-vars.css)

```css
@import 'palette-vars.css';
.warning { color : var(--red); }
.warning-alt { color : var(--red-pale); }
```

#### CSS lib, class utilities

Use [palette.css](css/palette.css) or [minified](css/min/palette.min.css) (6 kb) lib to color text, background or border with their className.

##### Apply colors

```html
<p class="red"></p>
<p class="red-pale"</p>
```

##### Apply background colors  (add a prefix `bg-` ) 

```html
/* white text on red background */
<div class="bg-red white"></div>
```

##### Apply border colors  (add a prefix `bd-` ) 

```html
/* red text with red borders */
<div class="bd-red red" style="border:1px solid;"></div>
```

## Build & contribute   

- [CONTRIBUTING](CONTRIBUTING.md)
- Sources [/src](/src)
- Tools and dependencies [package.json](package.json)
- Build script  [gulpfile.js](gulpfile.js),  command line :  `gulp build`
