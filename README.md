generator-amd-angular
======================

[![NPM version][npm-image]][npm-url]
![][david-url]
![][dt-url]
![][license-url]

Yeoman generator for es6 based angular skeleton, written in `AMD` module standard


> You can view the online demo at: [http://leftstick.github.io/generator-amd-angular](http://leftstick.github.io/generator-amd-angular)

## Prerequisites ##

1. Install [yeoman](http://yeoman.io/): `npm install -g yo`
2. Install __this__: `npm install -g generator-amd-angular`

> prepend with `sudo` if you are running on `*nix` OS.

## Use `generator-amd-angular` ##

`yo amd-angular`

> Answer questions as following demonstrated

![](https://raw.githubusercontent.com/leftstick/generator-amd-angular/master/docs/img/questions.png)

And then, the [amd](http://requirejs.org/docs/api.html) based project generated.

## Quick start ##

### Debug your app ###

The full featured `dev/dist` tools are provided, it's easy to start debugging your app.

Just move into the created directory with the given `project name`.

Run `npm start` to start a debug web server for the project.

Open [http://localhost:8080/](http://localhost:8080/) to see the playable skeleton, and have fun.


### Release your app ###

Move the root of the created project.

Run `npm run release` to compile all the source code into webpack bundles. And all required resources are generated into `{root}/build/`.

You can copy the `build` folder to anywhere you like, it's the released app.

#### Like have a try with the released app? ####

Install [sero-cli](https://github.com/leftstick/Sero-cli): `npm install -g sero-cli`

Move into `{root}/build/`

Run `sero server -p 8080 -h`, a static web server launched at port 8080.

Open [http://localhost:8080](http://localhost:8080) to watch the released version.


## More read ##

Looking for detail? Check it [here](https://github.com/leftstick/generator-amd-angular/blob/master/docs/api.md)



## LICENSE ##

[MIT License](https://raw.githubusercontent.com/leftstick/generator-amd-angular/master/LICENSE)




[npm-url]: https://npmjs.org/package/generator-amd-angular
[npm-image]: https://badge.fury.io/js/generator-amd-angular.png
[david-url]: https://david-dm.org/leftstick/generator-amd-angular.png
[dt-url]:https://img.shields.io/npm/dt/generator-amd-angular.svg
[license-url]:https://img.shields.io/npm/l/generator-amd-angular.svg
