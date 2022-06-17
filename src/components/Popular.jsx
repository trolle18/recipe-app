import { useEffect, useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";


function Popular() {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    },[]);


    const getPopular = async () => {
        const check = localStorage.getItem('popular');
        if (check) {
            setPopular(JSON.parse(check));
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
            const data = await api.json();
            
            localStorage.setItem('popular', JSON.stringify(data.recipes));
            setPopular(data.recipes);
            console.log(data);
        }
    }


    return (
        <>
            <section className="page-section">
                <div className="wrapper">
                    <h3>Popular</h3>
                    <Splide options={{
                        perPage: 4.2,
                        arrows: false,
                        pagination: false,
                        drag: "free",
                        gap:"1rem",

                    }}>
                        {popular.map((recipe) => {
                            return(
                                <SplideSlide key={recipe.id}>
                                    <div className="box">
                                        <Link to={'/recipe/'+ recipe.id}>
                                            <div className="card">
                                                <p>{recipe.title}</p>
                                                <img src={recipe.image} alt={recipe.title}/>
                                                <div className="gradient"></div>
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


// const Wrapper = styled.div`
//     margin: 4rem 0rem;
// `;

// const Card = styled.div`
//     min-height: 25rem;
//     border-radius: 2rem;
//     overflow: hidden;
//     position: relative;
// `;


export default Popular;
