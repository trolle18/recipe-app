import { useEffect, useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";
import { IoTimerOutline } from "react-icons/io5"

function Veggie() {
    const [veggie, setVeggie] = useState([]);

    useEffect(() => {
        getVeggie();
    },[]);

    const getVeggie = async () => {

        const check = localStorage.getItem('veggie');
        if (check) {
            setVeggie(JSON.parse(check));
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`);
            const data = await api.json();
            
        localStorage.setItem('veggie', JSON.stringify(data.recipes));
        setVeggie(data.recipes);
        console.log(data);
    }


    }

    return (
        <>
            <section className="page-section">
                <div className="wrapper">
                    <h3>Vegetarian</h3>
                    <Splide options={{
                        perPage: 4,
                        arrows: false,
                        pagination: false,
                        drag: "free",
                        gap:"1em",
                    }}>
                        {veggie.map((recipe) => {
                            return(
                                <SplideSlide key={recipe.id}>
                                    <div className="box">
                                        <Link to={'/recipe/'+ recipe.id}>
                                            <div className="card">
                                                <img src={recipe.image} alt={recipe.title}/>
                                                <div className="card-text">
                                                    <h4>{recipe.title}</h4>
                                                    <div className="card-text-details">
                                                        <p><IoTimerOutline/> {recipe.readyInMinutes} min</p>
                                                        <p>Servings: {recipe.servings}</p>
                                                        <p>{recipe.diets}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </SplideSlide>
                            );
                        })}
                    </Splide>
                </div>
            </section>
        </>
    )
}


export default Veggie