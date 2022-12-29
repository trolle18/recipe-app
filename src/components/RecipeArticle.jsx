import { Link } from "react-router-dom";
import '@splidejs/react-splide/css';
import FavoriteBtn from "./FavoriteBtn";


export default function RecipeArticle( {recipe} ) {

    return (
        <>
            <article className="recipe-slide recipe-article">
                <div className="recipe-slide__content">    
                    <FavoriteBtn recipe={recipe}/>
                        <div className="image-cntr">
                            <img src={recipe.image} alt={recipe.title}/>
                        </div>             

                        <Link to={'/recipe/'+ recipe.id}>      
                        <div className="slide-text">
                            <h3>{recipe.title}</h3>
                        </div>
                    </Link> 
                  
                </div>              
            </article>
        </>
    )
};
