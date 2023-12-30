
const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

const route = require('./route/index');

const db = require('./config/Connect');

db.Connect();

app.use(express.json());
app.use(express.urlencoded({ extended : true }));

<<<<<<< HEAD
app.use(cors({origin: 'https://fullstacknew.vercel.app/'}));
=======
app.use(cors({origin: 'https://fullstack-henna.vercel.app'}));
>>>>>>> 230cac3872260ab7e88ef992449bcc731d45612c

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
