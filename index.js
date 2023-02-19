const express = require('express');
const dbConnection = require('./Config/dbConnection');
const app = express();
const Cors = require('cors');
const bd = require('body-parser');
const mainRouter = require('./router/Router');
const PORT = process.env.PORT || 4000;

dbConnection();

app.use(Cors());
app.use(bd.urlencoded({extends: false}));
app.use(bd.json());
app.use(mainRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
