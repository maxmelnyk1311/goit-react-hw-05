import axios from 'axios';

const API_ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmFhNGRhZTkxOGEyNDYxNThjOGEzMWEzYmU4ZmYwYSIsInN1YiI6IjY1ZWYzYzBiODU3MDJlMDE4NTZjNTBkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vr-1aZMcBVe7B54VOeYKYkYAMW5pIF9i1tBTZN0jAEc";

export const getTrendingMovies = async () => {
    const url = 'https://api.themoviedb.org/3/trending/movie/day'
    const options = {
        params: {language: 'en-US'},
        headers: {
            Authorization: `Bearer ${API_ACCESS_TOKEN}`,
        }
    };
    const response = await axios.get(url, options);
    return response.data.results;
}

export const getMoviesByQuery = async (query) => {
    const url = 'https://api.themoviedb.org/3/search/movie'
    const options = {
        params: {
            language: 'en-US',
            query: query,
        },
        headers: {
            Authorization: `Bearer ${API_ACCESS_TOKEN}`,
        }
    };
    const response = await axios.get(url, options);
    return response.data.results;
}

export const getMovieDetails = async (movie_id) => {
    const url = `https://api.themoviedb.org/3/movie/${movie_id}`;
    const options = {
        params: {
            language: 'en-US',
        },
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_ACCESS_TOKEN}`,
        }
    };
    const response = await axios.get(url, options);
    return response.data;
}

export const getMovieCast = async (movie_id) => {
    const url = `https://api.themoviedb.org/3/movie/${movie_id}/credits`;
    const options = {
        params: {
            language: 'en-US',
        },
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_ACCESS_TOKEN}`,
        }
    };
    const response = await axios.get(url, options);
    return response.data.cast;
}

export const getMovieReviews = async (movie_id) => {
    const url = `https://api.themoviedb.org/3/movie/${movie_id}/reviews`;
    const options = {
        params: {
            language: 'en-US',
        },
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_ACCESS_TOKEN}`,
        }
    };
    const response = await axios.get(url, options);
    console.log(response.data.results);
    return response.data.results;
}
