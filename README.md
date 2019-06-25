# Commoncolors.css

**A lightweight CSS color palette at your fingertips.** https://juytter.github.io/commoncolors.css

- **Lightweight.** Limited to 12 'common' colors * 3 shades (pale, light, dark).
- **Intuitive.** Easily memorable. No exotic color names.
- **At your fingertips.** Ready-to-use css variables or class utilities.  


## Usage

### Names

**10 colors compose the color scheme** :  `red` `orange` `yellow` `green` `cyan` `blue` `violet` `magenta` `pink` `gray` , **plus,** `black` &  `white`. **x 3**  *colorname-suffix* to match a color shade :  `-p` (pale)  `-l` (light) `-d` (dark)

##### Examples
```
 black red-p red pink-d ...
```

### Vars css

import **[commoncolors--vars.css](./css/commoncolors--vars.css).**

```css
@import 'commoncolors--vars.css';
.warning {
  color : var(--red);
  background-color:  var(--red-p);
}
```

### Libs css

**[commoncolors-lib.css](./css/commoncolors-lib.css)([minified](./css/min/commoncolors-lib.min.css))**  is a library of 'class utilities' to color *texts*,  *backgrounds* and *borders*. **Use** `.colorname` utility for texts, `.bg-colorname` for backgrounds, `.border-colorname` for  borders.

#### Example

```html
<div class="red border-red bg-red-p">warning</div>
```

#### Separate files

Pick only the color files you need.

[gray.css](css/gray.css),  [red.css](css/red.css),  [yellow.css](css/yellow.css), [orange.css](css/orange.css), [green.css](css/green.css),  [cyan.css](css/cyan.css),  [blue.css](css/blue.css), [violet.css](css/violet.css), [magenta.css](css/magenta.css),  [pink.css](css/pink.css).        

## Build / Hack

- Source files :  [/src](./src)
- Tools and dependencies [package.json](package.json) : install packages `npm install -D`
- Build script [gulp](https://gulpjs.com) / [gulpfile.js](gulpfile.js) :  command-line >  `gulp build`
- Colors reference : [commoncolors--vars.css](src/commoncolors--vars.css)

## Additional notes

- Web colors https://en.wikipedia.org/wiki/Web_colors
- About ‘common’ colors : https://en.wikipedia.org/wiki/Color_term

---

MIT (c) 2019 juytter.  [License](LICENSE.md)
