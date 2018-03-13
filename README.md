# Palette.css

A color scheme, easy to memorize, easy to Re-use in CSS.

## Colors and naming convention

Black & White +  11 "main" colors using a 30° step scale on color wheel +  5 steps of shade for each.

`black`, `white`, `gray`, `red`, `orange`,
`yellow`, `lime`, `green`, `teal`, `cyan`, `blue`,
`indigo`, `violet`, `fuchsia`, `pink`

'Modifiers' from lightness to darkness  :

`-pale`, `-light`, `-dark`, `-black`

Add  'modifiers' to the main color name.
ex.  `gray-pale`, `red-black`, `yellow-light`,  ...

See.  [palette-vars.css](css/palette-vars.css) for details.

## Usage

### CSS vars

Import vars [palette-vars.css](css/palette-vars.css)

```
@import 'palette-vars.css';

.warning {
  color : var(--red);
}

/* adjust color with 'modifiers' */

.warning-alt {
  color : var(--red-pale);
}

```

### Atomic/functional CSS lib

Add [palette.css](css/palette.css) or [minified](css/min/palette.min.css) (6 ko)   to color text, background and border using CSS className.

Apply a color using the naming convention.

```
<p class="red"></p>
<p class="red-pale"</p>

```

Add the prefix `bg-` to apply a background color  

```
/* white text on red background */
<div class="bg-red white"></div>

```

Add the prefix `bd-` to apply a border color  

```
/* red text with red borders */
<div class="bd-red red" style="border:1px solid;"></div>
```

### Alt CSS

- [palette-lite.css](css/palette-lite.css) or [minified](css/min/palette-lite.min.css) (4 ko)  a  lite version with only `-pale` and  `-black`  modifiers.
- [colors.css](css/colors.css) or [minified](css/min/colors.min.css) only text colors
- [background-colors.css](css/background-colors.css) or [minified](css/min/background-colors.min.css) only background colors
- [border-colors.css](css/border-colors.css) or [minified](css/min/border-colors.min.css) only border colors


## Edit and Build   

- Edit sources [/src](/src)
- Gulp build script : 
  - see npm packages [package.json](package.json)
  - run command-line `gulp build`

---

[MIT license](LICENSE.md)
