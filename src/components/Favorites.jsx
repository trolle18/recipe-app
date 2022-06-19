import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoTimerOutline } from "react-icons/io5"

export default function Favorites() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        getFavorites();
    },[]);

    const getFavorites = async () => {

        const check = localStorage.getItem('favorites');
        if (check) {
            setFavorites(JSON.parse(check));
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/information?apiKey=${process.env.REACT_APP_API_KEY}&query=${'favorites'}&number=9`);
            const data = await api.json();
            
            localStorage.setItem('favorites', JSON.stringify(data.recipes));
            setFavorites(data.recipes);
            console.log(data);
        }
    }

    return (
        <>
            <section className="page-section">
                <div className="wrapper">
                    <h3>Vegetarian</h3>
                        {favorites.map((recipe) => {
                            return(
                                <div className="box">
                                    <Link to={'/recipe/'+ recipe.id}>
                                        <div className="card">
                                            <img src={recipe.image} alt={recipe.title}/>
                                            <div className="card-text">
                                                <h4>{recipe.title}</h4>
                                                <div className="card-text-details">
                                                    <p><IoTimerOutline/> {recipe.readyInMinutes} min</p>
                                                    <p>Servings: {recipe.servings}</p>
                                                    <p>{recipe.diets}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            );
                        })}
                </div>
            </section>
        </>
    )
};