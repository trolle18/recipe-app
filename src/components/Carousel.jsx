import { Splide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import RecipeSlide from "./RecipeSlide";


export default function Carousel({recipes}) {

    return (
        <>
        <Splide options={{
            perPage: 3,
            arrows: true,
            pagination: true,
            drag: true,
            gap:"1em",
            rewind: true,
        }}>
            {recipes.map((recipe) => {
                return(
                    <RecipeSlide recipe={recipe} key={recipe.id}/>
                );
            })}
        </Splide>
        </>
    )
};
