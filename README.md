# commoncolors.css

**A small, intuitive CSS color scheme at your fingertips.** https://juytter.github.io/commoncolors.css

- **Small.** Lightweight and easily memorable.
- **Intuitive.** No exotic color names or unintelligible code references. it's easy to learn, does not require a visual feedback and help to compose with colors.
- **At your fingertips.** Ready-to-use css variables or color class utilities .  

## Naming convention

- **10 *common* color names** :  `gray` `red` `orange` `yellow` `green` `cyan` `blue` `violet` `fuchsia` `pink`. Plus, `black` &  `white`.
- **3 *Lightness suffix*** match a darker or lighter color :  `-pale`  `-light`   `-dark`

```
 black red-pale red pink-dark ...
```

## CSS tools

### variables

import **[common-colors--vars.css](./css/common-colors--vars.css).**

```css
@import 'common-colors--vars.css';
.warning {
  width: 100%;
  color : var(--red);
  background-color:  var(--red-pale);
}
```

### Class libs

**[common-colors-lib.css](./css/common-colors-lib.css)([minified](./css/min/common-colors-lib.min.css)) is a lightweight CSS utility library**  to color *text*,  *background* and *border*.

`.colorname`  to color text, `.bgc-colorname` to color  background, `.bdc-colorname` to color border.

```html
<div class="red bdc-red bgc-red-pale">warning</div>
```

**Pick a color for your needs** :  [black.css](css/black.css),  [white.css](css/white.css),  [gray.css](css/gray.css),  [red.css](css/red.css),  [yellow.css](css/yellow.css), [orange.css](css/orange.css), [green.css](css/green.css),  [cyan.css](css/cyan.css),  [blue.css](css/blue.css), [violet.css](css/violet.css),  [fuchsia.css](css/fuchsia.css),  [pink.css](css/pink.css)          

### Build css files

- Sources :  [/src](./src)
- Tools and dependencies [package.json](package.json)
- Build with [gulp](https://gulpjs.com) and [gulpfile.js](gulpfile.js) script,  command-line :  `gulp build`

## Other systems &  specification

Refer to  [common-colors--vars.css](src/common-colors--vars.css) for the color scheme specification.

## Related

- Further reading about ‘common’ colors : https://en.wikipedia.org/wiki/Color_term
- Similar project : [Open color](https://yeun.github.io/open-color/)



MIT (c) 2019 juytter.  [License](LICENSE.md)
