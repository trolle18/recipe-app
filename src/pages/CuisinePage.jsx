import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SmallNav from '../components/SmallNav';
import CuisineCard from '../components/CuisineCard';


export default function CuisinePage() {
    const [cuisines, setCuisines] = useState([]);
    let params = useParams();

    // Fetch cuisine from API
    const getCuisine = async (name) => {
        const check = localStorage.getItem(name);  // Checks if recipes is saved in local storage
        if (check) {
            setCuisines(JSON.parse(check));
        } else {  // If not, get from API and save to local storage   
            const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=10`);
            const recipes = await data.json();
            localStorage.setItem(name, JSON.stringify(recipes.results));  // Recipes are saved to local storage, as Spoonaculars API calls are limited
            setCuisines(recipes.results);
        }
    };
    
    useEffect(() => {
        getCuisine(params.type)
    }, [params.type]);


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

                {cuisines.map((recipe) => {
                    return (
                        <CuisineCard recipe={recipe} key={recipe}/>
                    )
                })}
            </motion.div>
        </section>
        </>
    )
}