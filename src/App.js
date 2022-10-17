import {Route, Routes} from "react-router-dom";

import {MoviesPage} from "./pages/MoviesPage/MoviesPage";
import {MoviesList} from "./components/MoviesList/MoviesList";
import {MoviesListCard} from "./components";
import {Genres} from "./components/Genres/Genres";

const App = () => {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MoviesPage/>}>
                    <Route path='movies' element={<MoviesList/>}>
                        <Route path=':id' element={<MoviesListCard/>}/>
                    </Route>
                    <Route path={'genres'} element={<Genres/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;