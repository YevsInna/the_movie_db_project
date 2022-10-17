import {Route, Routes} from "react-router-dom";

import {MoviesPage} from "./pages/MoviesPage/MoviesPage";
import {MoviesList} from "./components/MoviesList/MoviesList";
import {MoviesListCard} from "./components";
import {Genres} from "./components/Genres/Genres";
import {MainLayout} from "./layouts/MainLayouts/MainLayout";
import {GenresPage} from "./pages/GenresPage/GenresPage";

const App = () => {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route path='movies' element={<MoviesPage/>}>
                        <Route path=':id' element={<MoviesListCard/>}/>
                    </Route>
                    <Route path={'genres'} element={<GenresPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;