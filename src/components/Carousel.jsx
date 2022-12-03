import { Splide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import RecipeSlide from "./RecipeSlide";


export default function Carousel({recipes}) {

    return (
        <>
        <Splide options={{
            perPage: 4,
            gap:"1em",
            breakpoints: {
                992: {
                    perPage: 4,
                },
                600: {
                    perPage: 2,
                },
                280: {
                    perPage: 1,
                }
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
