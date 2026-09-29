const Movie = require("../models/movieModel");

// Create Movie
const createMovie = async (req, res) => {
    try {
        const movie = await Movie.create(req.body);

        res.status(201).json({
            message: "Movie created successfully",
            movie,
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to create movie",
            error: error.message,
        });
    }
};

// Get All Movies
const getMovies = async (req, res) => {
    try {
        const movies = await Movie.find();

        res.status(200).json({
            message: "Movies fetched successfully",
            movies,
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch movies",
            error: error.message,
        });
    }
};

// Get Single Movie
const getMovie = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);

        if (!movie) {
            return res.status(404).json({
                message: "Movie not found",
            });
        }

        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch movie",
            error: error.message,
        });
    }
};

// Update Movie
const updateMovie = async (req, res) => {
    try {
        const movie = await Movie.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!movie) {
            return res.status(404).json({
                message: "Movie not found",
            });
        }

        res.status(200).json({
            message: "Movie updated successfully",
            movie,
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to update movie",
            error: error.message,
        });
    }
};

// Delete Movie
const deleteMovie = async (req, res) => {
    try {
        const movie = await Movie.findByIdAndDelete(req.params.id);

        if (!movie) {
            return res.status(404).json({
                message: "Movie not found",
            });
        }

        res.status(200).json({
            message: "Movie deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to delete movie",
            error: error.message,
        });
    }
};

module.exports = { createMovie, getMovies, getMovie, updateMovie, deleteMovie, };