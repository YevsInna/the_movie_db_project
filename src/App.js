import {Route, Routes} from "react-router-dom";
import React from "react";

import {MoviesPage} from "./pages/MoviesPage/MoviesPage";
import {MoviesListCard} from "./components";
import {MainLayout} from "./layouts/MainLayouts/MainLayout";
import {GenresPage} from "./pages/GenresPage/GenresPage";
import {MoviesByGenre} from "./components/MoviesByGenre/MoviesByGenre";

const App = () => {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<MoviesPage/>}/>
                    <Route path='movies' element={<MoviesPage/>}/>
                    <Route path='movie/:id/info/' element={<MoviesListCard/>}/>
                    <Route path={'genres'} element={<GenresPage/>}>
                        <Route path={':id'} element={<MoviesByGenre/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
};

export default App;