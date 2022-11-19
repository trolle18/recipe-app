import { BrowserRouter } from 'react-router-dom';
import Pages from "./pages/PageRouter";
// import Nav from './components/Nav';
// import SmallNav from './components/SmallNav';


function App() {
    return (
        <div className="App">
            <BrowserRouter>
            {/* <SmallNav/>
                <Nav /> */}
                <Pages />   
            </BrowserRouter>         
        </div>
    );
}


export default App;
