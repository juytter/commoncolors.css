# Contributing

You are Welcome ! 

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## Project goal

**Provide a small "rational" web color-scheme, "easy to use".**

"Easy to use" and "rational" refer to two principles, that should be keep in mind when contributing :

 - **Less is more :**  Limit and reduce possibilities help to keep a tool easy to use and doing one thing well. Before adding colors, "features", things, we should fix the existing ones and remove those who are little to not useful. 
 - **Using design-systems. **   Repeat patterns and conventions help users to naturally  'map'  the mechanisms, so help to memorize, find and choose colors. That's why palette is design over  a  mechanical pattern  (see. [](palette-vars.css)) and we repeat the color name scheme by convention  : MaincolorName[-shadingName] (-pale, -light ...)

## Dev & Build

Dev sources in [/src](/src), dependencies in [package.json](package.json), use Gulp and this [gulp script](gulpfile.js)  command line  `gulp build` to build CSS

## License

By contributing, you agree that your contributions will be licensed under its MIT License.