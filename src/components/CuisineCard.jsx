import { Link } from "react-router-dom";


export default function CuisineCard({recipe}) {

    return (
        <>
        <article className="cuisine-card" key={recipe.id}>
            <Link to={'/recipe/'+ recipe.id}>
                <div className="cuisine-card__img-cntr">
                    <img src={recipe.image} alt="" />
                </div>
                
                <h4>{recipe.title}</h4>
            </Link>
        </article>
        </>
    )
}