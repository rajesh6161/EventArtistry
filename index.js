const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const config = require("./config/key");

const { User } = require("./models/user");

const app = express();

// Connect to DB
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => {
    console.log(err);
    process.exit(0);
  });

// Middlewares

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.post("/api/user/register", async (req, res) => {
  const user = new User(req.body);
  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (err) {
    res.json("Error: " + err.message);
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
