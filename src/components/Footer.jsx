import { Link, NavLink } from "react-router-dom";
import { GiKnifeFork, GiNoodles, GiSushis } from "react-icons/gi";
import { IoHeart } from "react-icons/io5";
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';


export default function Footer() {
    return (
        <>
        <footer>
            <section className="footer-section">
                <Link to={"/"} className="category-link main-link">
                    <h1><GiKnifeFork/> Recipes</h1>                   
                </Link>
            </section>  

            <section  className="footer-section subsec">
                <NavLink to={'/cuisine/italian'} className="category-link">
                   <h4><FaPizzaSlice/> Italian</h4>
                </NavLink>

                <NavLink to={'/cuisine/american'} className="category-link">
                    <h4><FaHamburger/> American</h4>
                </NavLink>

                <NavLink to={'/cuisine/thai'} className="category-link">
                    <h4><GiNoodles/> Thai</h4>
                </NavLink>

                <NavLink to={'/cuisine/japanese'} className="category-link">
                   <h4><GiSushis/> Japanese</h4>
                </NavLink>

                <NavLink to={'/favorites'} className="category-link">
                    <h4><IoHeart/> Favorites</h4>
                </NavLink>       
            </section>
        </footer>
           
        </>
    );
};
