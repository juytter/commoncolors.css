# Palette.css

A color scheme, easy to memorize, easy to Re-use in CSS.

## Colors and naming convention

- Black & White +  11 main colors 

  `black`, `white`, `gray`, `red`, `orange`,`yellow`, `lime`, `green`, `teal`, `cyan`, `blue`,`indigo`, `violet`, `fuchsia`, `pink`

- 4 x 11 Main color shades  from lightness (-pale) to darkness (-black) 

   `colorname-pale`, `colorname-light`, `colorname-dark`, `colorname-black`

- Ex. `gray`, `gray-pale`, `red-black`, `yellow-light`,  ...

---

- See [palette-vars.css](src/palette-vars.css) for color scheme tech details.
- **demo :**  <https://juytter.github.io/palette-css/>

---

## Usage

### CSS var

Import vars [palette-vars.css](css/palette-vars.css)

```css
@import 'palette-vars.css';

.warning {
  color : var(--red);
}

/* adjust color with 'modifiers' */

.warning-alt {
  color : var(--red-pale);
}
```

### Functional CSS libs

Use [palette.css](css/palette.css) or [minified](css/min/palette.min.css) (6 kb) libs to color text, background or border with CSS className.

Apply colors.

```html
<p class="red"></p>
<p class="red-pale"</p>

```

Add a prefix `bg-` to apply background colors  

```html
/* white text on red background */
<div class="bg-red white"></div>

```

Add a prefix `bd-` to apply border colors  

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
- npm packages [package.json](package.json)
- Gulp script [gulpfile.js](gulpfile.js)
- Build with command line:  `gulp build`
