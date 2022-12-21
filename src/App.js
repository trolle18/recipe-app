import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage"
import CuisinePage from "./pages/CuisinePage"
import SearchedPage from './pages/SearchedPage';
import RecipePage from './pages/RecipePage';
import FavoritesPage from './pages/FavoritesPage';

// import Pages from "./pages/PageRouter";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
            <Routes>
                <Route path="/" element={ <HomePage/> }/>
                <Route path="/cuisine/:type" element={ <CuisinePage/> }/>
                <Route path="/favorites/" element={ <FavoritesPage/> }/>
                <Route path="/searched/:search" element={ <SearchedPage/> }/>
                <Route path="/recipe/:name" element={ <RecipePage/> }/>
            </Routes>
                {/* <Pages />    */}
            </BrowserRouter>         
        </div>
    );
}


export default App;
