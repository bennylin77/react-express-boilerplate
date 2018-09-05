# react-express-boilerplate
React &amp; redux + webpack + express boilerplate

## Setup

**1. Install**

Download this boilerplate and install the dependent packages:
```
npm i
```
Also, you need to install MongoDB. The installation tutorial for MongoDB is [Here](https://docs.mongodb.com/manual/installation/).

**2. Configure**

Modify the files in following paths to configure your own variables (e.g. DOMAIN, PORT and DATABASE):

```
./webpack.dev.js
./webpack.prod.js
```
- **./webpack.dev.js** is for the development mode
- **./webpack.prod.js** is for the production mode

Create an .env file in the root of your application:
```
touch ./.env
```
Set the variable in .env file:
```
PORT=your_port (e.g., 80)
NODE_ENV=development_or_production
DOMAIN=your_domain (e.g., http://localhost)
DATABASE=your_database_name (e.g., myBlog)
JWT_SECRET=your_jwt_secret (e.g., f3du4dPoZ6GCUPauOcALPkEdEUX1eE)

```


## Development mode

1. Install nodemon:
```
npm install -g nodemon
```
2. Start the development server:
```
npm start
```

## Production mode

1. Build the project for the production:
```
npm run build
```
2. Modify the environment variables in ./.env file which we created in the Setup step.

3. Use a process management (e.g., [PM2](https://pm2.io/doc/en/runtime/overview/?utm_source=pm2&utm_medium=website&utm_campaign=rebranding)) to make your application alive forever.


