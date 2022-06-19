import { useEffect, useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";
import { IoTimerOutline, IoHeart } from "react-icons/io5";


export default function Popular() {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    },[]);


    const getPopular = async() => {
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

    // const handleFavorites = async() => {
    //     const check = localStorage.getItem('favorites');
    //     if (check) {
    //         setPopular(JSON.parse(check));
    // } else {
    //     localStorage.setItem('favorites', JSON.stringify(data.recipes));
    //     setPopular(data.recipes);
    //     console.log(data);
    // }
    // }

    // const addToFavourites = (id) => {
    //     if (this.state.faveIconActive) {
    //         this.setState({ faveIconActive: false });

    //         let favorites = JSON.parse(localStorage.getItem("favorites"));
    //         let index = favorites.findIndex(productId => productId === id);
    //         favorites.splice(index, 1);
    //         localStorage.setItem("favorites", JSON.stringify(favorites));
    //     } else {
    //         this.setState({
    //             faveIconActive: true,
    //         });

    //         let favorites = JSON.parse(localStorage.getItem("favorites"));
    //         favorites.push(id);
    //         localStorage.setItem("favorites", JSON.stringify(favorites));
    //     }
    // };



    return (
        <>
            <section className="page-section">
                <div className="wrapper">
                    <h3>Popular</h3>
                    <Splide options={{
                        perPage: 4,
                        arrows: false,
                        pagination: false,
                        drag: "free",
                        gap:"1em",
                    }}>
                        {popular.map((recipe) => {
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
                                                        <button className="fav-btn" ><IoHeart/></button>
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
};
