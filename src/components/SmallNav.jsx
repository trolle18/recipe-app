import { Link } from "react-router-dom";
import Categories from "./Categories";
import Search from "./Search";
import { GiKnifeFork } from "react-icons/gi";
import BurgerMenu from "./BurgerMenu";


export default function SmallNav() {
    return (
        <>
        <nav className="slim-nav">
          
            <Link to={"/"} className="slim-nav__logo">
                <GiKnifeFork/>
                <h1>Recipes</h1>
            </Link>

            <div className="slim-nav__navigation">
                <Categories/>
                <Search/>
            </div>
            <BurgerMenu/>
        </nav>          
        </>
    );
};
