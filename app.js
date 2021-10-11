const mongoose = require('mongoose');
const express = require("express");
const app = express();
const users = require("./routes/api/users");
const cuts = require("./routes/api/cuts");
const bodyParser = require('body-parser');
const passport = require('passport');

require('./config/passport')(passport);

const db = require('./config/keys').mongoURI;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/cuts", cuts);

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
