import { Splide, SplideSlide } from '@splidejs/react-splide';
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
                },
                600: {
                    perPage: 3,
                },
                992: {
                    perPage: 3,
                },                
            },            
            arrows: false,
            pagination: true,
            drag: true,
            rewind: true,
        }}>
            {recipes.map((recipe) => {
                return(
                    <SplideSlide key={recipe.id}>
                        <RecipeSlide recipe={recipe}/>
                    </SplideSlide>
                );
            })}
        </Splide>
        </>
    )
};
