# react-express-boilerplate
React &amp; redux + webpack + express boilerplate

## Setup

Modify the files in following paths to configure your variables (e.g. DOMAIN, PORT and DATABASE ).

```
./env
./webpack.dev.js
./webpack.prod.js
```
- **./webpack.dev.js** is for development mode
- **./webpack.prod.js** is for production mode
- **./env** is for both environments so if you want to switch from development mode to production mode, make sure you modify variables in ./env


## Development mode

Install nodemon:
```
npm install -g nodemon
```
Start development server:
```
npm start
```
