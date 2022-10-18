import {Route, Routes} from "react-router-dom";

import {MoviesPage} from "./pages/MoviesPage/MoviesPage";
import {MoviesListCard} from "./components";
import {MainLayout} from "./layouts/MainLayouts/MainLayout";
import {GenresPage} from "./pages/GenresPage/GenresPage";
import React from "react";

const App = () => {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route path='movies' element={<MoviesPage/>}>

                    </Route>

                    <Route path='movie/:id/info/' element={<MoviesListCard/>}/>
                    <Route path={'genres'} element={<GenresPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;