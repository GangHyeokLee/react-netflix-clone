import axios from "axios"
import movie_api from "../security/api"

// console.log("env", process.env.REACT_APP_MOVIE_DB_API_KEY);
// console.log("js", movie_api);

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        // api_key: process.env.REACT_APP_MOVIE_DB_API_KEY,
        api_key: movie_api,
        language: "ko-KR"
    }
});

export default instance;