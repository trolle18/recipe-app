import { Link } from "react-router-dom";
import Categories from "./Categories";
import Search from "./Search";
import { GiKnifeFork } from "react-icons/gi";


export default function Nav() {
    return (
        <>
            <div className="hero-cntr">
                <div className="hero-cntr__img"></div>
            </div>
            <section className="nav-cntr">
                <Link to={"/"} className="nav-cntr__logo">
                    <GiKnifeFork/>
                    <h1>Recipes</h1>
                </Link>
                <div className="nav-cntr__navigation">
                    <Search/>
                    <Categories/>
                </div>
            </section>    
        </>
    );
};
