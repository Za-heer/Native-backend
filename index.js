const express = require('express');
const dbConnection = require('./Config/dbConnection');
const app = express();
const Cors = require('cors');
const mainRouter = require('./router/Router');
const PORT = process.env.PORT || 4000;
const bodyParser = require('body-parser');
// const urlParser = express.json();

dbConnection();

app.use(Cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(mainRouter);
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Api is hit');
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
