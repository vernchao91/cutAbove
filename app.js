const path = require('path');
const mongoose = require('mongoose');
const express = require("express");
const app = express();
const users = require("./routes/api/users");
const stylists = require("./routes/api/stylists")
const styles = require("./routes/api/styles");
const reviews = require("./routes/api/reviews");
const appointments = require("./routes/api/appointments")
const bodyParser = require('body-parser');
const passport = require('passport');

require('./config/passport')(passport);

const db = require('./config/keys').mongoURI;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/stylists", stylists);
app.use("/api/styles", styles);
app.use("/api/reviews", reviews);
app.use("/api/appointments", appointments)

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}