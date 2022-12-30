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
                    <h2><GiKnifeFork/> Recipes</h2>            
                </Link>
            </section>  

            <section  className="footer-section subsec">
                <NavLink to={'/cuisine/italian'} className="category-link">
                   <span><FaPizzaSlice/> Italian</span>
                </NavLink>

                <NavLink to={'/cuisine/american'} className="category-link">
                    <span><FaHamburger/> American</span>
                </NavLink>

                <NavLink to={'/cuisine/thai'} className="category-link">
                    <span><GiNoodles/> Thai</span>
                </NavLink>

                <NavLink to={'/cuisine/japanese'} className="category-link">
                   <span><GiSushis/> Japanese</span>
                </NavLink>

                <NavLink to={'/favorites'} className="category-link">
                    <span><IoHeart/> Favorites</span>
                </NavLink>       
            </section>
        </footer>
           
        </>
    );
};
