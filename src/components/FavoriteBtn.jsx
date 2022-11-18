import { useState } from "react";
import { IoHeart } from "react-icons/io5";


export default function FavoriteBtn( {recipe} ) {
    const [favorites, setFavorites] = useState([]);

    // Save favorite recipes to local storage
    const addToFavorites = id => {
        if (!favorites.includes(id)) setFavorites(favorites.concat(id));
        localStorage.setItem('favorites', JSON.stringify(id));
        console.log(favorites);
    };

    return (
        <>
            <button 
            className="fav-btn" 
            onClick={() => addToFavorites(recipe.id)}
            >
                <IoHeart/>
            </button>
        </>
    )
};
