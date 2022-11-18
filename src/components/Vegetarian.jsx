import { useEffect, useState } from "react";
import Carousel from "./Carousel";

export default function Vegetarian() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getVeggie();
    },[]);


    // Fetch vegetarian recipes from API
    const getVeggie = async () => {
        const check = localStorage.getItem('veggie');   // Checks if recipes is saved in local storage
        if (check) {
            setRecipes(JSON.parse(check));
        } else {    // If not, get from API and save to local storage 
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`);
            const data = await api.json();
            localStorage.setItem('veggie', JSON.stringify(data.recipes));  // Recipes are saved to local storage, as Spoonaculars API calls are limited
            setRecipes(data.recipes);
            console.log(data);
        }
    }


    return (
        <>
            <section className="page-section">
                <div className="wrapper">
                    <h3>Vegetarian</h3>
                    <Carousel recipes={recipes}/>
                </div>
            </section>
        </>
    )
};