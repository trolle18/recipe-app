/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
// import { useParams } from "react-router-dom";
import { IoHeart } from "react-icons/io5";


export default function FavoriteBtn( {recipe} ) {
    // let params = useParams();
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

    // const favBtn = document.querySelector('.fav-btn')
    // const recipeId = document.querySelector('recipe.id')

    // const textForStorage = 'Hello World.'

    // // setter
    // localStorage.setItem('my-key', textForStorage);
    
    // // getter
    // const textFromStorage = localStorage.getItem('my-key');
    // // remove
    // localStorage.removeItem('my-key');

    // // remove all
    // localStorage.clear();

    const StorageFavorites = JSON.parse(localStorage.getItem('favorites')) || []
    const [favorites, setFavorites] = useState(StorageFavorites);

    function handleSaveFavorite(){
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
    function handleSubmit(e){
        e.preventDefault();
        const input = document.getElementById(recipe.id);
        setFavorites([
            ...favorites,
            input.value
        ]);
        console.log(favorites)
        handleSaveFavorite({});
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input id={recipe.id} type="hidden" value={recipe.title} />
            <button 
            type="submit"
            className="fav-btn" 
            >
                <IoHeart/>
            </button>
        </form>
        </>
    )
};
