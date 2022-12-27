import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SmallNav from '../components/SmallNav';
import CuisineCard from '../components/CuisineCard';
import RecipeSlide from '../components/RecipeSlide';


export default function FavoritesPage() {
    const [favorites, setFavorites] = useState([]);
    let params = useParams();

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

            <motion.div className="grid" 
                animate={{opacity: 1}}
                initial={{opacity: 0}}
                exit={{opacity: 0}}
                transition={{duration: 0.5}}>

                {favorites.map((recipe) => {
                    return (
                        // <CuisineCard recipe={recipe} key={recipe.id}/>
                        <RecipeSlide recipe={recipe} key={recipe.id}/>
                    )
                })}
            </motion.div>
        </section>
        </>
    )
}