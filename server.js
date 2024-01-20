const express = require("express");
const db = require("./db");
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());
const personRoutes = require('./routes/personRoutes');
const menuRoutes = require('./routes/menuRoutes');
app.use('/person', personRoutes);

app.use('/', menuRoutes);

const os = require("os");
let user = os.userInfo;

app.get("/", function (req, res) {
  res.send(`Hello World ${os.platform()} ${os.EOL} `);
});




app.listen(3000);
