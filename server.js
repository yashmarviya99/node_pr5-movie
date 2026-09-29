const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./src/db/db");
const movieRoutes = require("./src/routes/movieRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connect
connectDB();

app.use("/api/movies", movieRoutes);


// Start Massage
app.get("/", (req, res) => {
  res.json({
    message: "Movie API is running successfully",
  });
});

const PORT = process.env.PORT || 5000;

// Server starting
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});