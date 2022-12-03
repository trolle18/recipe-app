import { Splide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import RecipeSlide from "./RecipeSlide";


export default function Carousel({recipes}) {

    return (
        <>
        <Splide options={{
            perPage: 3,
            gap:".5em",
            width: "100%",
            breakpoints: {
               400: {
                    perPage: 2,
                    // gap:".5em",
                    // width: "100%"
                },
                600: {
                    perPage: 3,
                    // gap:".5em",
                },
                992: {
                    perPage: 3,
                    // gap:"1em",
                    // width: "100%",
                },
                
            },
            
            arrows: false,
            pagination: true,
            drag: true,
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
