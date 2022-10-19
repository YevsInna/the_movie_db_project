import {axiosService} from "./axios.service";
import {urls} from "../configs";

const genreService = {
    getAllGenres: ()=> axiosService.get(urls.genres)
}

export {genreService};