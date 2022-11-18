import { Link } from "react-router-dom";
import Categories from "./Categories";
import Search from "./Search";
import { GiKnifeFork } from "react-icons/gi";
import BurgerMenu from "./BurgerMenu";


export default function SmallNav() {
    return (
        <>
        <nav className="slim-nav">
            <div className="slim-nav__header">
                <Link to={"/"} className="logo">
                    <GiKnifeFork/>
                    <h1>Recipes</h1>
                </Link>
             </div>  
                <div className="slim-nav__navigation">
                    <Categories/>
                    <Search/>
                </div>
                <BurgerMenu/>
        </nav>          
        </>
    );
};
