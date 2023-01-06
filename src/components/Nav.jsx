import { Link, NavLink } from "react-router-dom";
import Categories from "./Categories";
import Search from "./Search";
import { GiKnifeFork } from "react-icons/gi";
import { IoHeart } from "react-icons/io5";


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
                    <section className='categories'>
                        <Categories/>
                    </section>

                   <section className='categories'>
                        <NavLink className="fav-btn cat-sub-link"  to={'/favorites'} >
                            <IoHeart/>
                            <span>Favorites</span>
                        </NavLink>
                    </section>
                </div>
               
            </section>    
        </>
    );
};
