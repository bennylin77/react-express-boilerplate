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
PORT=your_port (e.g., 80)
NODE_ENV=development_or_production
DOMAIN=your_domain (e.g., http://localhost)
DATABASE=your_database_name (e.g., myBlog)
JWT_SECRET=your_jwt_secret (e.g., f3du4dPoZ6GCUPauOcALPkEdEUX1eE)

```


## Development mode

Install nodemon
```
npm install -g nodemon
```
Start development server
```
npm start
```

## Production mode

Build the project for production.
```
npm run build
```
Modify environment variables in ./.env file.

Use Process Management (e.g., [PM2](https://pm2.io/doc/en/runtime/overview/?utm_source=pm2&utm_medium=website&utm_campaign=rebranding)) to make your application alive forever.


