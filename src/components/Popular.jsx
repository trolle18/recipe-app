import { useEffect, useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";
import { IoTimerOutline, IoHeart } from "react-icons/io5";


export default function Popular() {
    const [popular, setPopular] = useState([]);
    // const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        getPopular();
    },[]);


    // Fetch popular recipes from API
    const getPopular = async() => {
        const check = localStorage.getItem('popular');  // Checks if recipes is saved in local storage
        if (check) {
            setPopular(JSON.parse(check));
        } else {  // If not, get from API and save to local storage    
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
            const data = await api.json();
            localStorage.setItem('popular', JSON.stringify(data.recipes));  // Recipes are saved to local storage, as Spoonaculars API calls are limited
            setPopular(data.recipes);
            console.log(data);
        }
    }

    // Save favorite recipes to local storage
    // const addToFavorites = id => {
    //     if (!favorites.includes(id)) setFavorites(favorites.concat(id));
    //     localStorage.setItem('favorites', JSON.stringify(id));
    //     console.log(id);
    // };

    // const removeFavorites = id => {
    //     if (!favorites.includes(id)) setFavorites(favorites.concat(id));
    //     localStorage.setItem('favorites', JSON.stringify(id));
    //     console.log(id);
    // };



    return (
        <>
            <section className="page-section">
                <div className="wrapper">
                    <h3>Popular</h3>
                    <Splide options={{
                        perPage: 4,
                        arrows: false,
                        pagination: false,
                        drag: "free",
                        gap:"1em",
                    }}>
                        {popular.map((recipe) => {
                            return(
                                <SplideSlide key={recipe.id}>
                                    <div className="box">
                                        <Link to={'/recipe/'+ recipe.id}>
                                            <div className="card">                                                
                                                <img src={recipe.image} alt={recipe.title}/>
                                                <div className="card-text">
                                                    <h4>{recipe.title}</h4>
                                                    <div className="card-text-details">
                                                        <p><IoTimerOutline/> {recipe.readyInMinutes} min</p>
                                                        <p>Servings: {recipe.servings}</p>
                                                    </div>
                                                    <button 
                                                        className="fav-btn" 
                                                        //  onClick={() => addToFavorites(recipe.id)}
                                                    >
                                                        <IoHeart/>
                                                    </button>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </SplideSlide>
                            );
                        })}
                    </Splide>
                </div>
            </section>
        </>
    )
};
