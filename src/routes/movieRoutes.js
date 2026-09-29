const express = require("express");

const {
    createMovie, getMovies, getMovie, updateMovie, deleteMovie,
} = require("../controllers/movieControllers");

const router = express.Router();

// Create Movie
router.post("/", createMovie);

// Get All Movies
router.get("/", getMovies);

// Get Single Movie
router.get("/:id", getMovie);

// Update Movie
router.put("/:id", updateMovie);

// Delete Movie
router.delete("/:id", deleteMovie);

module.exports = router;