import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SmallNav from '../components/SmallNav';
import CuisineCard from '../components/CuisineCard';


export default function FavoritesPage() {
    const [favorites, setFavorites] = useState([]);
    let params = useParams();

    // // Fetch cuisine from API
    // const getFavorites = async (name) => {
    //     const check = localStorage.getItem(name);  // Checks if recipes is saved in local storage
    //     if (check) {
    //         setFavorites(JSON.parse(check));
    //     } else {  // If not, get from API and save to local storage   
    //         return (
    //             <p>No favorites</p>
    //         )
    // };
    
    // useEffect(() => {
    //     getFavorites(params.type)
    // }, [params.type]);



    return (
        <>
        <SmallNav/>
        <section className="cuisine page-section">
            <h1>{params.type}</h1>
            <motion.div className="grid" 
                animate={{opacity: 1}}
                initial={{opacity: 0}}
                exit={{opacity: 0}}
                transition={{duration: 0.5}}>

                {favorites.map((recipe) => {
                    return (
                        <CuisineCard recipe={recipe} key={recipe.id}/>
                    )
                })}
            </motion.div>
        </section>
        </>
    )
}