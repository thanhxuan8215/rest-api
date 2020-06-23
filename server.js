require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const AuthorizationRouter = require('./authorization/routes.config');
const UsersRouter = require('./users/routes.config');

app.use(bodyParser.json());

AuthorizationRouter.routesConfig(app);
UsersRouter.routesConfig(app);

app.listen(3000, function () {
    console.log('app listening at port 3000');
});