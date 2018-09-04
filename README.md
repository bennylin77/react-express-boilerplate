# react-express-boilerplate
React &amp; redux + webpack + express boilerplate

## Setup

**1. Install**

Download this boilerplate and install the dependent packages
```
npm i
```
Also, you need to intall MongoDB. The installation tutorial for MongoDB is [Here](https://docs.mongodb.com/manual/installation/)

**2. Configure**

Modify the files in following paths to configure your variables (e.g. DOMAIN, PORT and DATABASE).

```
./webpack.dev.js
./webpack.prod.js
```
- **./webpack.dev.js** is for development mode
- **./webpack.prod.js** is for production mode

Creat an .env file in the root of the project.
```
touch ./.env
```
Set the variable in .env file.
```
PORT=your_port_e.g.,_80
NODE_ENV=development_or_production
DOMAIN=your_domain_e.g.,_http://localhost
DATABASE=your_database_name_e.g.,_testDevelopment
JWT_SECRET=your_jwt_secret_e.g.,_f3du4dPoZ6GCUPauOcALPkEdEUX1eE

```


## Development mode

Install nodemon:
```
npm install -g nodemon
```
Start development server:
```
npm start
```

## Production mode

Build the project for production mode
```
npm run build
```

