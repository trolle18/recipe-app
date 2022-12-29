import { Link, NavLink } from "react-router-dom";
import Categories from "./Categories";
import { GiKnifeFork } from "react-icons/gi";
import { IoHeart } from "react-icons/io5";
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiSushis } from 'react-icons/gi';


export default function Footer() {
    return (
        <>
        <footer>
            <section className="">
                <Link to={"/"} className="">
                    <h1><GiKnifeFork/> Recipes</h1>                   
                </Link>
            </section>  

            <section  className="">
                <Link to={'/cuisine/italian'} className="category-link">
                    <h4><FaPizzaSlice/> Italian</h4>
                </Link>

                <Link to={'/cuisine/american'} className="category-link">
                    <h4><FaHamburger/> American</h4>
                </Link>

                <Link to={'/cuisine/thai'} className="category-link">
                    <h4><GiNoodles/> Thai</h4>
                </Link>

                <Link to={'/cuisine/japanese'} className="category-link">
                    <h4><GiSushis/> Japanese</h4>
                </Link>

                <Link to={'/favorites'} className="category-link">
                    <h4><IoHeart/> Favorites</h4>
                </Link>
               
            </section>    
        </footer>
           
        </>
    );
};
