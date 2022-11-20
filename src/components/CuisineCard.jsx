import { Link } from "react-router-dom";
import { IoTimerOutline } from "react-icons/io5";


export default function CuisineCard({recipe}) {

    return (
        <>
         <Link to={'/recipe/'+ recipe.id}>
            <article className="cuisine-card">
                <div className="cuisine-card__img-cntr">
                    <img src={recipe.image} alt="" />
                </div>
                
                <h4>{recipe.title}</h4>
                <div className="cuisine-card__text">
                    <p><IoTimerOutline/> {recipe.readyInMinutes} min</p>
                    <p>Servings: {recipe.servings}</p>
                    <p>{recipe.diets}</p>
                    <p>{recipe.summary}</p>
                </div>   
            </article>
        </Link>
        </>
    )
}