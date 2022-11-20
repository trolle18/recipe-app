/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoHeart } from "react-icons/io5";


export default function FavoriteBtn( {recipe} ) {
    let params = useParams();
    // const [favorites, setFavorites] = useState([]);


    // const favorites = localStorage.getItem('favorites')

    // // Save favorite recipes to local storage
    // const addToFavorites = id => {
    //     if (!favorites.includes(id)) setFavorites(favorites.concat(id));
    //     localStorage.setItem('favorite', JSON.stringify(id));
    //     console.log(favorites);
    // };

    // const getFavorites = async() => {
    //     const check = localStorage.getItem('favorite');
    //     if (check) {
    //         setFavorites(JSON.parse(check));
    //     } else {
    //         const api = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    //         const data = await api.json();
    //         localStorage.setItem('favorite', JSON.stringify(data.recipes));  // Recipes are saved to local storage, as Spoonaculars API calls are limited
    //         setFavorites(data.recipes);
    //     }
    // }
    // useEffect(() => {
    //     getFavorites();
    // }, [params.name]);




    return (
        <>
            <button 
            className="fav-btn" 
            // onClick={() => addToFavorites(recipe.id)}
            >
                <IoHeart/>
            </button>
        </>
    )
};
