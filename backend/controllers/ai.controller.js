import { fetchMoviesfromAI } from "../services/ai.service.js";
import { fetchFromTMDB } from "../services/tmdb.service.js";



export async function getRecommendMovies(req, res) {
    try {
        const prompt = req.body.prompt; 
        const aiMovies = await fetchMoviesfromAI(prompt);

       // Retrieving each movie from TMDB
        const movies = await Promise.all(aiMovies.map(async (title) => {
            const response = await fetchFromTMDB(
                `https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=en-US&page=1`
            );
            return response.results && response.results[0] ? response.results[0] : null;
        }));

        const filteredMovies = movies.filter((movie) => movie !== null);
        res.status(200).json({  success: true, 
                                titles: aiMovies,
                                movies: filteredMovies,
                            });
                            
    } catch (error) {
        console.error("Error in getRecommendMovies:", error);
        res.status(500).json({ 
            success: false, 
            message: "Failed to get movie recommendations", 
            error: error.message 
        });
    }
};