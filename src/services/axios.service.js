import axios from "axios";

import {baseURL} from "../configs";

const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use((config) => {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGFkZmRmMDVlMmI5Njk0OGJmNmMxZWQwNDIxZmFlNyIsInN1YiI6IjYwY2Y2YTY3YjQ1OGI4MDAyOTRmMDQ2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AwAZlV_uqSmJ4_VW6d6xEBdrSFgDpesp5TbRfPupHZM';
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
});

export {axiosService};