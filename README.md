# 🌈✋ Common Colors Css

A small CSS color scheme and *intuitive* color names, at your fingertips.
Demo & color chart:  <https://juytter.github.io/common-colors-css/>

---

## Benefits

- The naming pattern allows you to name and use colors intuitively without confusion or ambiguity.
- Spend less time on color codes or refer to a color chart.

see. [Introducing](https://juytter.github.io/common-colors-css/introducing.html) Common Colors CSS

## Download

- [Last version (zip)](dist/common-colors-css-lastest.zip)
- [Releases](https://github.com/juytter/common-colors-css/releases)

## Usage

#### CSS vars

[css variables](http://devdocs.io/css/--*) is the obvious way to use *Common Colors*.

Use [common-colors--vars.css](css/common-colors--vars.css)

```css
@import 'common-colors--vars.css';
.warning { color : var(--red); }
.warning-alt { color : var(--red-pale); }
```

#### CSS libs

Libs are *Low-level* css colors classes in css files, the best simple reliable way to use Common Colors : All browsers support (css level 1), no dependencies, immutable css classes ...

Use [common-colors.css](css/common-colors.css) or [minified](css/min/common-colors.min.css) (4 Ko) lib to color *text* and *background* with class names.

##### Apply colors

```html
<p class="red"></p>
<p class="red-pale"</p>
```

##### Apply background colors  (add a prefix `bg-` )

```html
/* white on red background */
<div class="bg-red white"></div>
```

##### Lib - Extra

Use [common-colors-extra.css](css/common-colors-extra.css) or [minified](css/min/common-colors-extra.min.css) to color *borders* and *pseudo* (hover/focus) on elements with class names.

```html
/* red border */
<p class="border bd-red"></p>
/* yellow color, yellow-black on hover */
<a class="yellow hv_yellow-black"></a>
```

##### Alt.  CSS modules files

See. [/css](/css)


## Build & contribute   

- [Contributing](CONTRIBUTING.md)
- Sources [/src](/src)
- Tools and dependencies [package.json](package.json)
- Build script  [gulpfile.js](gulpfile.js),  command line :  `gulp build`
