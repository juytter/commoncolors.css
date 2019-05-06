# commoncolors.css

**A simplified, intuitive css color palette at your fingertips.** https://juytter.github.io/commoncolors.css

- **Simplified.** Just common color names and a limited shades pattern (pale, light, dark).
- **Intuitive.** No exotic color names or unintelligible code references. Lightweight, human-readable and easily memorable.
- **At your fingertips.** Ready-to-use css variables or color class utilities .  

## Naming convention

- **10  ‘common’ color names** :  `gray` `red` `orange` `yellow` `green` `cyan` `blue` `violet` `magenta` `pink`. Plus, `black` &  `white`.
- **3 *Lightness suffix*** for shades :  `-pale`  `-light` `-dark`

```
 black red-pale red pink-dark ...
```

## CSS usage

### css vars

import **[commoncolors--vars.css](./css/commoncolors--vars.css).**

```css
@import 'commoncolors--vars.css';
.warning {
  color : var(--red);
  background-color:  var(--red-pale);
}
```

### Class libs

**[commoncolors-lib.css](./css/commoncolors-lib.css)([minified](./css/min/commoncolors-lib.min.css)) is a lightweight *atomic* css colors library**  to color *texts*,  *backgrounds* and *borders*.

`.colorname`  to color text, `.bg-c(colorname)` to color  background, `.bd-c(colorname)` to color border.

```html
<div class="red bd-c(red) bg-c(red-pale)">warning</div>
```

**Pick a color for your needs** :  [black.css](css/black.css),  [white.css](css/white.css),  [gray.css](css/gray.css),  [red.css](css/red.css),  [yellow.css](css/yellow.css), [orange.css](css/orange.css), [green.css](css/green.css),  [cyan.css](css/cyan.css),  [blue.css](css/blue.css), [violet.css](css/violet.css), [magenta.css](css/magenta.css),  [pink.css](css/pink.css).        

### Build CSS files

- source files :  [/src](./src)
- Tools and dependencies [package.json](package.json) : install dev tools `npm install -D`
- Build using [gulp](https://gulpjs.com) / [gulpfile.js](gulpfile.js) :  command-line >  `gulp build`

## Specification  / reference

**hsl () color reference.** [commoncolors--vars.css](src/commoncolors--vars.css)

## Related

- Further reading about ‘common’ colors : https://en.wikipedia.org/wiki/Color_term
- Similar project : [Open color](https://yeun.github.io/open-color/)


MIT (c) 2019 juytter.  [License](LICENSE.md)
