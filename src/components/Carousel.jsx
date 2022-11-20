import { Splide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import RecipeSlide from "./RecipeSlide";


export default function Carousel({recipes}) {

    return (
        <>
        <Splide options={{
            breakpoints: {
                600: {
                    perPage: 1,
                    width: "100%",
                    gap:"0em",
                },
                992: {
                    perPage: 2,
                    width: "100%",
                    gap:"0em",
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
