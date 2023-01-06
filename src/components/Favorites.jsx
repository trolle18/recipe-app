import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { IoTimerOutline, IoHeart, IoHeartOutline } from "react-icons/io5"

export default function Favorites({recipes}) {
    const [favorites, setFavorites] = useState([]);

    
useEffect(() => {
    const getFavorites = async () => {
        const check = localStorage.getItem('favorites');
        if (check) {
            setFavorites(JSON.parse(check));
        } else {
            localStorage.setItem('favorites', JSON.stringify(favorites));
            setFavorites(favorites);
            console.log(favorites);
        }
    }

    
        getFavorites();
    },[favorites]);

    // const addToFavorites = id => {
    //     if (!favorites.includes(id)) setFavorites(favorites.concat(id));
    //     localStorage.setItem('favorites', JSON.stringify(id));
    //     console.log(id);
    // };
    
    // const removeFavorites = id => {
    //     let index = favorites.indexOf(id);
    //     console.log(index);
    //     let temp = [...favorites.slice(0, index), ...favorites.slice(index + 1)];
    //     setFavorites(temp); 
    //     localStorage.removeItem('favorites', JSON.stringify(id));
    // };

    // let findFavorites = recipes.filter(recipe => favorites.includes(recipe.id));



    return (
        <>
            <section className="page-section">
                <div className="wrapper">
                    <h3>Favorites</h3>
                        {favorites.map((recipe) => {
                            return(
                                <div className="card">
                                    <h4>{recipe.title}</h4>
                                </div>
                            );
                        })}
                </div>
            </section>
        </>
    )
};