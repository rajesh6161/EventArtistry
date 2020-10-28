const express = require("express");
const app = express();
const connectDB = require("./config/db");
const cors = require("cors");

app.use(express.json({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("API Running");
});

// Define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening to requests on port ${PORT}...`);
});
