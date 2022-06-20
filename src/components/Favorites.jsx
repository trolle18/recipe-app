import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoTimerOutline, IoHeart, IoHeartOutline } from "react-icons/io5"

export default function Favorites({recipes}) {
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

    const addToFavorites = id => {
        if (!favorites.includes(id)) setFavorites(favorites.concat(id));
        localStorage.setItem('favorites', JSON.stringify(id));
        console.log(id);
      };

      // this one does the exact opposite, it removes the favorite recipe id's
    const removeFavorites = id => {
        let index = favorites.indexOf(id);
        console.log(index);
        let temp = [...favorites.slice(0, index), ...favorites.slice(index + 1)];
        setFavorites(temp); 
        localStorage.removeItem('favorites', JSON.stringify(id));
    };

    let findFavorites = recipes.filter(recipe => favorites.includes(recipe.id));

    return (
        <>
            <section className="page-section">
                <div className="wrapper">
                    <h3>Favorites</h3>
                        {findFavorites.map((recipe) => {
                            return(
                                <div className="box">
                                    {/* <Link to={'/recipe/'+ recipe.id}> */}
                                        <div className="card">
                                            <img src={recipe.image} alt={recipe.title}/>
                                            <div className="card-text">
                                                <h4>{recipe.title}</h4>
                                                <div className="card-text-details">
                                                    <p><IoTimerOutline/> {recipe.readyInMinutes} min</p>
                                                    <p>Servings: {recipe.servings}</p>
                                                    <p>{recipe.diets}</p>
                                                    <Link to={'/recipe/'+ recipe.id}>Read more</Link>
                                                </div>
                                                <button className="fav-btn" onClick={() => addToFavorites(recipe.id)}><IoHeart/></button>
                                                <button className="fav-btn" onClick={() => removeFavorites(recipe.id)}><IoHeartOutline/></button>

                                            </div>
                                        </div>
                                    {/* </Link> */}
                                </div>
                            );
                        })}
                </div>
            </section>
        </>
    )
};