const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Connect to DB
mongoose
  .connect(
    "mongodb+srv://rajesh:175812@cluster0.ymiio.gcp.mongodb.net/movie?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => {
    console.log(err);
    process.exit(0);
  });

app.get("*", (req, res) => {
  res.send("Hello World!");
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
