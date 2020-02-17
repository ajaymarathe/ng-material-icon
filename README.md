# Ng Material Icon
🍺 Materail Icons for Angular Lovers. Coded by [Bootcatch](http://bootcatch.com).

[![NPM](https://img.shields.io/npm/v/ng-material-icon.svg)](https://www.npmjs.com/package/ng-material-icon)
[![NPM](https://img.shields.io/npm/dt/ng-material-icon.svg)](https://www.npmjs.com/package/ng-material-icon) 
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Installation
Using NPM:
```html
npm i ng-material-icon --save

npm i material-icons --save
```
In you `angular.json` Add Material icon css.
```js
"styles": [
    // "src/styles.scss",
    "./node_modules/material-icons/iconfont/material-icons.css"
],
```
**Or**

In your `styles.scss` file Import Material icon css
```js
/* You can add global styles to this file, and also import other style files */
@import "material-icons/iconfont/material-icons.css";

```

## Usage

Import direct in your `app.module.ts` file:
```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import NgMaterialIconModule from ng-material-icon
import { NgMaterialIconModule } from "ng-material-icon";

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    //import your NgMaterialIconModule here
    NgMaterialIconModule
  ],
  providers: []
})
export class AppModule { }
```

Then use wherever you want !! Goodluck:
```html
  <ng-material-icon icon="check_circle" size="3" color="red"></ng-material-icon>
```

## Note

- *Add only name to icon, e.g `icon="check_circle"`*

- ***icon** - Material Icon names will find here [material icons](https://material.io/resources/icons/?style=baseline)*
- ***size** - Icon size in `rem`.*
- ***color** - You can give any valid value `e.g red, yellow, #fffff, #ff0000.`*

## Author

Ajay Marathe

+ https://github.com/ajaymarathe

## Copyright and License

Copyright 2019 [Ajay Marathe](https://github.com/ajaymarathe). Code released under the [MIT](https://github.com/ajaymarathe/ng-material-icon/blob/master/LICENSE) license.
