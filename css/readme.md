# Common-colors CSS

**A small, intuitive color palette** <https://juytter.github.io/common-colors>

common colors CSS vars and class libs 

## Download

- [Last version (zip)](https://github.com/juytter/common-colors/raw/master/css/common-colors-css-lastest.zip)

## Usage

#### CSS variables

Link [common-colors--vars.css](./dist/common-colors--vars.css). 

```css
@import 'common-colors--vars.css';
.warning { color : var(--red); }
.warning-alt { color : var(--red-white); }
```

#### CSS color class libs

Link [common-colors-lib.css](./dist/common-colors-lib.css) or [minified](./dist/min/common-colors-lib.min.css) (4 Ko) to color *texts*,  *backgrounds* and *borders* with class names.

##### Text colors

```html
<p class="red"></p>
<p class="red-white"></p>
```

#####  background colors  (add a prefix `bg-` )

```html
/* white on red background */
<div class="bg-red"></div>
```

#####  border colors  (add a prefix `bd-` )

```html
/* red borders */
<div class="border bd-red"></div>
```

##### hovers

Link [common-colors-hover.css](./dist/common-colors-hover.css) / [minified](./dist/min/common-colors-hover.css) to color *pseudo* (hover) elements  with class names.

```html
/* red border */
<p class="border bd-red"></p>
/* yellow color, yellow-black on hover */
<a class="yellow hv_yellow-black"></a>
```

##### All CSS files

See. [/dist](./dist)

## Build   

- Sources, see. [/src](./src)
- Tools and dependencies [package.json](package.json)
- Build using Gulp,  script  [gulpfile.js](gulpfile.js),  command line :  `gulp build`

