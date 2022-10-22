import {axiosService} from "./axios.service";
import {urls} from "../configs";

const genreService = {
    getAllGenres: () => axiosService.get(urls.genres),
    getMoviesByGenre: (id, page = 1) => axiosService.get(`${urls.movies}?with_genres=${id}`, {params: {page}})
}

export {genreService};