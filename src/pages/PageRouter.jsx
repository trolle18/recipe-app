import { Route, Routes } from 'react-router-dom';
import HomePage from "./HomePage"
import CuisinePage from "./CuisinePage"
import SearchedPage from './SearchedPage';
import RecipePage from './RecipePage';

export default function Pages() {
    return(
        <>
            <Routes>
                <Route path="/" element={ <HomePage/> }/>
                <Route path="/cuisine/:type" element={ <CuisinePage/> }/>
                <Route path="/searched/:search" element={ <SearchedPage/> }/>
                <Route path="/recipe/:name" element={ <RecipePage/> }/>
            </Routes>
        </>
    )
}