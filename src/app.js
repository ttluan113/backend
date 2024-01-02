
const express = require('express');
const app = express();
const PORT = process.env.NODE_DOCKER_PORT || 5000;

const cors = require('cors');

const route = require('./route/index');

const db = require('./config/Connect');

db.Connect();

app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.use(cors({origin: 'https://www.fullstack.pro.vn'}));

route(app);



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})