import {axiosService} from "./axios.service";
import {urls} from "../configs";

const movieService = {
    getAll: (page = 1) => axiosService.get(urls.movies, {params: {page}}),
    searchMovie: (page, searchMovie) => axiosService.get(`${urls.searchMovie}?&page=${page}&query=${searchMovie}`)
}

export {movieService};