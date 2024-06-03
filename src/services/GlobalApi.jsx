import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key = '93dccf13e49a9408c0035bee6f8548ef'
const movieByGenreBaseUrl='https://api.themoviedb.org/3/discover/movie?api_key=93dccf13e49a9408c0035bee6f8548ef'

//https://api.themoviedb.org/3/trending/all/day?api_key=93dccf13e49a9408c0035bee6f8548ef
const getTrendingVideos = axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_key);
const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseUrl+"&with_genres="+id)

export default {
    getTrendingVideos,
    getMovieByGenreId
}