# Palette.css

A *petit* CSS color-scheme, easy to use.

## Colors

- Black & White +  11 main colors 

  `black`, `white`, `gray`, `red`, `orange`,`yellow`, `lime`, `green`, `teal`, `cyan`, `blue`,`indigo`, `violet`, `fuchsia`, `pink`

- 4 x 11 main colors shades  from lightness (-pale) to darkness (-black) `-pale`, `-light`, `-dark`, `-black`

### Naming convention 

MainColorName[-ShadeName] : 

Ex. `gray`, `gray-pale`, `red-black`, `yellow-light`,  ...

### Demo and color references

-  <https://juytter.github.io/palette-css/>
- See [palette-vars.css](src/palette-vars.css) for ref adn technical details.

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

#### Alt CSS

- [palette-lite.css](css/palette-lite.css) or [minified](css/min/palette-lite.min.css) (4 kb)  a lite version with only `-pale` and  `-black`  modifiers.
- [colors.css](css/colors.css) or [minified](css/min/colors.min.css) only text colors
- [background-colors.css](css/background-colors.css) or [minified](css/min/background-colors.min.css) only background colors
- [border-colors.css](css/border-colors.css) or [minified](css/min/border-colors.min.css) only border colors


## Build   

- Sources [/src](/src)
- Dependencies [package.json](package.json)
- Build script :  Gulp ([gulpfile.js](gulpfile.js)), command line :  `gulp build`
