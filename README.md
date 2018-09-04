# react-express-boilerplate
React &amp; redux + webpack + express boilerplate

## Setup

**1. Install**

Download this boilerplate and install the dependent packages
```
npm i
```
Also, you need to intall MongoDB. The installation tutorial for MongoDB is [Here](https://docs.mongodb.com/manual/installation/)

**2. Configure files**

Modify the files in following paths to configure your variables (e.g. DOMAIN, PORT and DATABASE).

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
