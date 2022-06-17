import { Link } from 'react-router-dom';
import Categories from "./Categories";
import Search from "./Search";
import { GiKnifeFork } from "react-icons/gi";


export default function Nav() {
    return (
        <>
            <section className="header-img-cntr">
                <div className="header-img"></div>
            </section>
            <section className="header">
                <Link to={"/"} className="logo">
                    <GiKnifeFork/>
                    <h1>Recipes</h1>
                </Link>
                <div className='nav'>
                    <Search/>
                    <Categories/>
                </div>
            </section>    
        </>
    );
};
