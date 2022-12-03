import { Link } from "react-router-dom";
import { SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { IoTimerOutline } from "react-icons/io5";
// import FavoriteBtn from "./FavoriteBtn";


export default function RecipeSlide( {recipe} ) {
    // const [favorites, setFavorites] = useState([]);

    // // Save favorite recipes to local storage
    // const addToFavorites = id => {
    //     if (!favorites.includes(id)) setFavorites(favorites.concat(id));
    //     localStorage.setItem('favorites', JSON.stringify(id));
    //     console.log(favorites);
    // };

    // // const removeFavorites = id => {
    // //     if (!favorites.includes(id)) setFavorites(favorites.concat(id));
    // //     localStorage.setItem('favorites', JSON.stringify(id));
    // //     console.log(id);
    // // };


    return (
        <>
        <SplideSlide key={recipe.id}>
            <article className="recipe-slide">
                <div className="recipe-slide__content">    
                    {/* <FavoriteBtn /> */}
                    <Link to={'/recipe/'+ recipe.id}>      
                        <div className="img-cntr">
                            <img src={recipe.image} alt={recipe.title}/>
                        </div>                                        
                        
                        <div className="slide-text">
                            <h4>{recipe.title}</h4>
                            <div className="slide-text-details">
                                <p><IoTimerOutline/> {recipe.readyInMinutes} min</p>
                                <p>Servings: {recipe.servings}</p>
                                {/* <p>{recipe.diets}</p> */}
                            </div>                           
                        </div>
                    </Link> 
                  
                </div>              
            </article>
        </SplideSlide>
        </>
    )
};
