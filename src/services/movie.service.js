import {axiosService} from "./axios.service";
import {urls} from "../configs";

const movieService = {
    getAll: (page = 1) => axiosService.get(urls.movies, {params: {page}}),
    searchMovie: (searchKey) => axiosService.get(`${urls.searchMovie}=${searchKey}`)
}

export {movieService};