import axios from "axios"
import movie_api from "../security/api"


const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: movie_api,
        language: "ko-KR"
    }
});

export default instance;