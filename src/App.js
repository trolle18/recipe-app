import Category from "./components/Categories";
import Pages from "./pages/PageRouter";
import { BrowserRouter } from 'react-router-dom';
import Search from "./components/Search";
import styledComponents from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
            <Nav>
                <GiKnifeFork/>
                <Logo to={"/"}>Delicious</Logo>
            </Nav>
                <Search/>
                <Category/>
                <Pages />   
            </BrowserRouter>         
        </div>
    );
}

const Logo = styledComponents(Link)`
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 400;
    font-family: "Lobster two", cursive;
`

const Nav = styledComponents.div`
    padding: 4rem 0rem;
    display: flex;
    justify-content: flex-start;
    align-item; center;

        svg {
            font-size: 2rem;
        }
`


export default App;
