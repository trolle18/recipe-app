import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";

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
            setVeggie(data.recipes)
            console.log(data)
    }


    }

    return (
        <>
            <section className="page-section">
                <Wrapper>
                    <h3>Vegitarian Picks</h3>
                    <Splide options={{
                        perPage:4,
                        arrows: false,
                        pagination: false,
                        drag: "free",
                        gap:"5rem",

                    }}>
                        {veggie.map((recipe) => {
                            return(
                                <SplideSlide key={recipe.id}>
                                    <Card>
                                    <Link to={'/recipe/'+ recipe.id}>
                                        <div className="card">
                                            <p>{recipe.title}</p>
                                            <img src={recipe.image} alt={recipe.title}/>
                                            <div className="gradient"></div>
                                        </div>
                                        </Link>
                                    </Card>
                                </SplideSlide>
                            );
                        })}
                    </Splide>
                </Wrapper>
            </section>
        </>
    )
}


const Wrapper = styled.div`
    margin: 4rem 0rem;
`;

const Card = styled.div`
    min-height: 25rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;
`;

export default Veggie