import { BrowserRouter, Link } from 'react-router-dom';
import Pages from "./pages/PageRouter";
import Categories from "./components/Categories";
import Search from "./components/Search";
import { GiKnifeFork } from "react-icons/gi";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
            <section className="nav">
                <Link to={"/"} className="logo">
                    <GiKnifeFork/>
                    <h1>Delicious</h1> 
                </Link>
            </section>
                <Search/>
                <Categories/>
                <Pages />   
            </BrowserRouter>         
        </div>
    );
}


export default App;
