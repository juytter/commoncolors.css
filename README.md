# commoncolors.css

**A small, intuitive CSS color scheme at your fingertips.** https://juytter.github.io/commoncolors.css

- **Small.** Lightweight and easily memorable.
- **Intuitive.** No exotic color names or unintelligible code references. it's easy to learn, does not require a visual feedback and help to compose with colors.
- **At your fingertips.** Ready-to-use css variables / color class utilities .  

## Naming convention

- **9  ‘common’ color names** :  `gray` `red` `orange` `yellow` `green` `cyan` `blue` `violet` `magenta`. Plus, `black` &  `white`.
- **3 *Lightness suffix*** match a darker or lighter color :  `-pale`  `-light` `-dark`

```
 black red-pale red pink-dark ...
```

## CSS tools

### variables

import **[commoncolors--vars.css](./css/commoncolors--vars.css).**

```css
@import 'commoncolors--vars.css';
.warning {
  width: 100%;
  color : var(--red);
  background-color:  var(--red-pale);
}
```

### Class libs

**[commoncolors-lib.css](./css/commoncolors-lib.css)([minified](./css/min/commoncolors-lib.min.css)) is a lightweight class utilities library**  to color *text*,  *background* and *border*.

`.c-colorname`  to color text, `.bgc-colorname` to color  background, `.bdc-colorname` to color border.

```html
<div class="red bdc-red bgc-red-pale">warning</div>
```

**Pick a color for your needs** :  [black.css](css/black.css),  [white.css](css/white.css),  [gray.css](css/gray.css),  [red.css](css/red.css),  [yellow.css](css/yellow.css), [orange.css](css/orange.css), [green.css](css/green.css),  [cyan.css](css/cyan.css),  [blue.css](css/blue.css), [violet.css](css/violet.css),  [magenta.css](css/magenta.css).        

### Build css files

- source files in :  [/src](./src)
- Tools and dependencies [package.json](package.json) , install dev tools `npm install -D`
- Build with [gulp](https://gulpjs.com) and [gulpfile.js](gulpfile.js) script,  command-line :  `gulp build`

## Other systems &  Specification

See  [commoncolors--vars.css](src/commoncolors--vars.css)  in  [/src](./src)  is  the **hsl () color specification**. Compiled version [commoncolors--vars.css](./css/commoncolors—vars.css)  in [/css](./css)  is the **hexadecimal color spec**.

## Related

- Further reading about ‘common’ colors : https://en.wikipedia.org/wiki/Color_term
- Similar project : [Open color](https://yeun.github.io/open-color/)



MIT (c) 2019 juytter.  [License](LICENSE.md)
