const mongoose = require('mongoose');
const express = require("express");
const app = express();
const users = require("./routes/api/users");


app.get("/", (req, res) => res.send("Hello World"));

const db = require('./config/keys').mongoURI;

app.use("/api/users", users);
app.use("/api/cuts", cuts);

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
