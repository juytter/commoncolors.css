# Commoncolors.css

**A simple, lightweight CSS color palette at your fingertips.** https://juytter.github.io/commoncolors.css

- **Lightweight.** Limited to 10 'common' colors * 3 shades.
- **Intuitive.** Easily memorable.
- **At your fingertips.** Ready-to-use css variables and class helpers.  


## Usage

### Color names

**10 colors compose the color scheme** :  `red` `orange` `yellow` `green` `cyan` `blue` `violet` `magenta` `pink` `gray` , **plus,** `black` &  `white` and **4 Shades of lightness**  adding a suffix from 1 to 4 (the lightest to darkest) to a color name, where a suffix `-3` is equal to the color name (without suffix).

```
 red or red-3, red-1, red-2, red-4, ...
```

### Vars

import **[commoncolors--vars.css](./css/commoncolors--vars.css).**

```css
@import 'commoncolors--vars.css';
.warning {
  color : var(--red);
  background-color:  var(--red-p);
}
```

### Libs

**[commoncolors-lib.css ](./css/commoncolors-lib.css)([minified](./css/min/commoncolors-lib.min.css))**  is a library of class *helpers* to color *texts*,  *backgrounds* and *borders*. **Use** `.colorname` class for texts, `.bg-colorname` for backgrounds, `.bd-colorname` for  borders.

#### Example

```html
<div class="red bd-red bg-red-2">warning</div>
```

#### Individuals files

[gray.css](css/gray.css),  [red.css](css/red.css),  [yellow.css](css/yellow.css), [orange.css](css/orange.css), [green.css](css/green.css),  [cyan.css](css/cyan.css),  [blue.css](css/blue.css), [violet.css](css/violet.css), [magenta.css](css/magenta.css),  [pink.css](css/pink.css).        

## Build / hack

- Source files :  [/src](./src)
- Tools and dependencies [package.json](package.json) : install packages `npm install -D`
- Build script [gulp](https://gulpjs.com) / [gulpfile.js](gulpfile.js) :  command-line >  `gulp build`
- Colors reference : [commoncolors--vars.css](src/commoncolors--vars.css)

## About 'common' colors

- Web colors https://en.wikipedia.org/wiki/Web_colors
- Color term : https://en.wikipedia.org/wiki/Color_term

---

MIT (c) 2019 juytter.  [License](LICENSE.md)
