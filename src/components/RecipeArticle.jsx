import { Link } from "react-router-dom";
import '@splidejs/react-splide/css';
import { IoTimerOutline } from "react-icons/io5";
import FavoriteBtn from "./FavoriteBtn";


export default function RecipeArticle( {recipe} ) {

    return (
        <>
            <article className="recipe-slide">
                <div className="recipe-slide__content">    
                    <FavoriteBtn recipe={recipe}/>
                        <div className="img-cntr">
                            <img src={recipe.image} alt={recipe.title}/>
                        </div>             

                        <Link to={'/recipe/'+ recipe.id}>      
                        <div className="slide-text">
                            <h3>{recipe.title}</h3>
                            {/* <div className="slide-text-details">
                               <p><IoTimerOutline/> {recipe.readyInMinutes} min</p>
                               <p>Servings: {recipe.servings}</p>
                               <p>{recipe.diets}</p>
                            </div>                            */}
                        </div>
                    </Link> 
                  
                </div>              
            </article>
        </>
    )
};
