import { Link } from "react-router-dom";
import { SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { IoTimerOutline } from "react-icons/io5";
import FavoriteBtn from "./FavoriteBtn";


export default function RecipeSlide( {recipe} ) {

    // function CheckReady()  {
    //     const readyInMin = recipe.readyInMinutes;
    //     if (readyInMin) {
    //         return (
    //             <p><IoTimerOutline/> {recipe.readyInMinutes} min</p>
    //         )
    //     }
    // }
    // function CheckServings()  {
    //     const servings = recipe.servings;
    //     if (servings) {
    //         return (
    //             <p>Servings: {recipe.servings}</p>
    //         )
    //     }
    // }
    // function CheckDiets()  {
    //     const diets = recipe.diets;
    //     if (diets) {
    //         return (
    //             <p>{recipe.diets}</p>
    //         )
    //     }
    // }


    return (
        <>
        {/* <SplideSlide key={recipe.id}> */}
            <article className="recipe-slide">
                <div className="recipe-slide__content">    
                    <FavoriteBtn recipe={recipe}/>
                        <div className="img-cntr">
                            <img src={recipe.image} alt={recipe.title}/>
                        </div>             

                        <Link to={'/recipe/'+ recipe.id}>      
                        <div className="slide-text">
                            <h4>{recipe.title}</h4>
                            <div className="slide-text-details">
                               {/* {CheckReady()}  */}
                               <p><IoTimerOutline/> {recipe.readyInMinutes} min</p>
                               {/* {CheckServings()}  */}
                               <p>Servings: {recipe.servings}</p>
                               {/* {CheckDiets()}  */}
                               <p>{recipe.diets}</p>
                            </div>                           
                        </div>
                    </Link> 
                  
                </div>              
            </article>
        {/* </SplideSlide> */}
        </>
    )
};
