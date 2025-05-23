import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";
import { SMALL_IMG_BASE_URL } from "../utils/constants";

const MovieRecommendations = () => {
    const [prompt, setPrompt] = useState('');
    const [movies, setMovies] = useState([]);
    const [titles, setTitles] = useState([]);
    const [loading, setLoading] = useState(false);
    const textareaRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

        useEffect(() => { 
            const savedMovies = JSON.parse(localStorage.getItem("movies"));
            const savedTitles = JSON.parse(localStorage.getItem("titles"));
            
            if (savedMovies) setMovies(savedMovies);
            if (savedTitles) setTitles(savedTitles);
        }, []); 

        useEffect(() => {
            adjustTextareaHeight();
        }, [prompt]);
    
    const handleFetchMovieRecommendations = async () => {
        setLoading(true);
        setMovies([]);
        setTitles([]);
        try {
            const res = await axios.post('/api/v1/chat/recommend-movies', { prompt });
            if (res.data.success) {
            setMovies(res.data.movies);  
            setTitles(res.data.titles);

            localStorage.setItem("movies", JSON.stringify(res.data.movies)); 
            localStorage.setItem("titles", JSON.stringify(res.data.titles)); 
            } else {
                toast.error(res.data.message);
                console.log(res.data.message);
            }
        } catch (error) {
            if (error.response && error.response.status === 404) {
                toast.error('Nothing found, please try again with a different prompt');
            } else {
                toast.error('An error occurred, please try again later');
            }
        }
        setLoading(false);
    };

     const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleFetchMovieRecommendations();
        }
    };

    const handleClearRecommendations = () => {
        setMovies([]);
        setTitles([]);
        setPrompt('');
        localStorage.removeItem("movies");
        localStorage.removeItem("titles");
    };


    const adjustTextareaHeight = () => {
        const textarea = textareaRef.current;
        textarea.style.height = "auto"; 
        textarea.style.height = `${textarea.scrollHeight}px`; 
    };

    const handleMouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    return (
        <div className={"bg-black min-h-screen text-white "}>
            <Navbar />
             <div className="mx-auto container px-4 py-8 mt-10 h-full flex flex-col items-center justify-center">
                <h1 
            className="text-5xl font-bold text-white relative pb-10 -mt-5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:bg-gradient-to-r after:from-transparent after:via-custom-purple after:to-transparent"
        >
            Your AI Movie Assistant
        </h1>
        
       

        <p className="text-lg mt-7 mb-7 text-gray-400 my-5">
            Looking for something to watch? Simply tell me what you’re in the mood for, and I’ll recommend movies based on your vibe.
        </p>

            <div className="flex flex-col items-center mb-5 w-full max-w-2xl space-y-3">
                <textarea
                    ref={textareaRef}
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    onKeyDown={handleKeyDown} 
                    placeholder="Message to assistant"
                    className="w-full p-3 rounded-lg border-none outline-none text-black resize-none overflow-hidden text-base min-h-[40px] max-h-[150px] mb-5"
                />
                <div className="flex justify-center space-x-4">
                <button
                    onClick={handleFetchMovieRecommendations}
                    disabled={loading}
                    className={`bg-custom-purple text-white font-bold px-4 py-2 ml-2 rounded ${loading ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                >
                    {loading ? 'Loading...' : 'Send'}
                </button>

                <button
                    onClick={handleClearRecommendations} 
                    className={`bg-gray-500/70 hover:bg-gray-500 text-white font-bold px-4 py-2 ml-2 rounded ${loading ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                >
                    Refresh
                </button>
            </div>
            </div>

            <div
			className='bg-black text-white relative px-5 md:px-20'>
            <h2 className='text-3xl font-bold mt-4 mb-7 text-center'>Recommended Movies</h2>
            <div className='flex space-x-4 overflow-x-scroll scrollbar-hide' >
                {movies.length > 0 ? (
                    movies.map((movie) => (
                        <div key={movie.id}  >
                            <Link to={`/watch/${movie.id}`} className='min-w-[250px] relative group'>
                            <div className='rounded-lg overflow-hidden'>
                                <img
                                    src={SMALL_IMG_BASE_URL + movie.backdrop_path}
                                    alt={movie.title}
                                    className='transition-transform duration-300 ease-in-out group-hover:scale-125'
                                />
                                </div>
                                <p className="text-gray-400 text-base mt-2">{movie.title}</p>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-400">No movies to display. Enter a prompt to get recommendations!</p>
                )}
            </div>
            </div>
        </div>
     </div>
    );
};

export default MovieRecommendations;

