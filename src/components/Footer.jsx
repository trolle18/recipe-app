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
                    <GiKnifeFork/>
                    <h1>Recipes</h1>                   
                </Link>
            </section>  

            <section  className="footer-section">
                <NavLink to={'/cuisine/italian'} className="category-link">
                   <FaPizzaSlice/>
                   <h4> Italian</h4>
                </NavLink>

                <NavLink to={'/cuisine/american'} className="category-link">
                    <FaHamburger/>
                    <h4>American</h4>
                </NavLink>

                <NavLink to={'/cuisine/thai'} className="category-link">
                    <GiNoodles/>
                    <h4>Thai</h4>
                </NavLink>

                <NavLink to={'/cuisine/japanese'} className="category-link">
                   <GiSushis/>
                   <h4>Japanese</h4>
                </NavLink>           
            </section>
            <section  className="footer-section">
                <NavLink to={'/favorites'} className="category-link">
                    <IoHeart/> 
                    <h4>Favorites</h4>
                </NavLink>               
            </section>
        </footer>
           
        </>
    );
};
