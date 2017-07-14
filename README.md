# BookLibrary-BootstrapTemplate

Base HTML Bootstrap template for BookLibrary sample application
Using:<br/>
* Webpack
* npm
* Bootstrap
* JQuery
* HTML
* Javascript
* CSS

### Quick start

```bash
# clone the repository
$ git clone https://github.com/alanmacgowan/BookLibrary-BootstrapTemplate.git myapp

# change directory to your app
$ cd myapp

# install dependencies with npm
$ npm install

# start the server
$ npm run server
```
This will open a browser in [http://localhost:8080/login.html](http://localhost:8080/login.html]).

## DEV

After installing all dependencies with npm you can start the server:

* `npm run server`

It will start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload automatically, you don't need to reload the page.

## PROD

To build the application :

* `npm run build:dist`

webpack will bundle the application and all necessary files in the  `/dist` folder that you can deploy to the server.
