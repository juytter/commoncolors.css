# Palette.css

A color scheme, easy to memorize, easy to Re-use in CSS.

## Colors and naming convention

Black & White +  11 "main" colors and 5 steps of shade for each.
See [palette-vars.css](src/palette-vars.css) for tech details.

`black`, `white`, `gray`, `red`, `orange`,
`yellow`, `lime`, `green`, `teal`, `cyan`, `blue`,
`indigo`, `violet`, `fuchsia`, `pink`

'Modifiers' from lightness to darkness :

`-pale`, `-light`, `-dark`, `-black`

Add  'modifiers' to the main color name.
ex.  `gray-pale`, `red-black`, `yellow-light`,  ...

## Usage

### CSS vars

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

### Functional CSS lib

Add [palette.css](css/palette.css) or [minified](css/min/palette.min.css) (6 ko) to color text, background and border using CSS className.

Apply colors.

```html
<p class="red"></p>
<p class="red-pale"</p>

```

Add the prefix `bg-` to apply a background color  

```html
/* white text on red background */
<div class="bg-red white"></div>

```

Add the prefix `bd-` to apply a border color  

```html
/* red text with red borders */
<div class="bd-red red" style="border:1px solid;"></div>
```

### Alt CSS

- [palette-lite.css](css/palette-lite.css) or [minified](css/min/palette-lite.min.css) (4 ko)  a  lite version with only `-pale` and  `-black`  modifiers.
- [colors.css](css/colors.css) or [minified](css/min/colors.min.css) only text colors
- [background-colors.css](css/background-colors.css) or [minified](css/min/background-colors.min.css) only background colors
- [border-colors.css](css/border-colors.css) or [minified](css/min/border-colors.min.css) only border colors


## Edit and Build   

- Sources [/src](/src)
- npm packages [package.json](package.json)
- Gulp script [gulpfile.js](gulpfile.js)
- Build : command line `gulp build`

