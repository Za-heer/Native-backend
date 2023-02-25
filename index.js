const express = require('express');
const dbConnection = require('./Config/dbConnection');
const app = express();
const Cors = require('cors');
const urlParse = require('express');
const mainRouter = require('./router/Router');
const PORT = process.env.PORT || 4000;

dbConnection();

app.use(Cors());
app.use(urlParse);
app.use(mainRouter);
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
