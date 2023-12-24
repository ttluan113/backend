
const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

const route = require('./route/index');

const db = require('./config/Connect');

db.Connect();

app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.use(cors({origin: 'https://fullstack-mu-olive.vercel.app'}));

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})