import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SmallNav from '../components/SmallNav';
import RecipeSlide from '../components/RecipeSlide';
import { FaSearch } from 'react-icons/fa';
import RecipeArticle from '../components/RecipeArticle';


export default function FavoritesPage() {
    const [favorites, setFavorites] = useState([]);
    let params = useParams();
    const [searchValue, setSearchValue] = useState("");


     // Fetch cuisine from API
     const getFavorites = async () => {
        const check = localStorage.getItem("favorites");  // Checks if recipes is saved in local storage
        setFavorites(JSON.parse(check));
        console.log(favorites)
    };
    
    useEffect(() => {
        getFavorites();
    }, [params.name]);


    return (
        <>
        <SmallNav/>
        <section className="cuisine page-section">
            <h1>Favorites</h1>

            <div className="searchbar-cntr">
            <div className="searchbar">
                <FaSearch/>
                <input 
                type="text" 
                placeholder='Search favorites...'
                onChange={(e) => setSearchValue(e.target.value.toLowerCase())} 
                />
            </div>
        </div>

            <motion.div className="flex-grid" 
                animate={{opacity: 1}}
                initial={{opacity: 0}}
                exit={{opacity: 0}}
                transition={{duration: 0.5}}>

                {favorites
                .filter((recipe) => recipe.title.toLowerCase().startsWith(searchValue) || recipe.diets.toLowerCase().startsWith(searchValue))
                .map((recipe) => {
                    return (
                        <RecipeArticle recipe={recipe} key={recipe.id}/>
                    )
                })}
            </motion.div>
        </section>
        </>
    )
}