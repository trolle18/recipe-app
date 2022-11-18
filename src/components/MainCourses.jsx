import { useEffect, useState } from "react";
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";
import { IoTimerOutline } from "react-icons/io5"


export default function MainCourses() {
    const [mainCourses, setMainCourses] = useState([]);

    useEffect(() => {
        getMainCourses();
    },[]);


    const getMainCourses = async () => {
        const check = localStorage.getItem('dinner');
        if (check) {
            setMainCourses(JSON.parse(check));
        } else {
            const api = await fetch(`https://api.spoonacular.com/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=dinner`);
            const data = await api.json();
            
            localStorage.setItem('dinner', JSON.stringify(data.recipes));
            setMainCourses(data.recipes);
            console.log(data);
        }
    }



    return (
        <>
            <section className="page-section">
                <div className="wrapper">
                    <h3>Main Courses</h3>
                    <div className="grid-cntr">
                        {mainCourses.map((recipe) => {
                            return(
                                    <div className="box" key={recipe.id}>
                                        <Link to={'/recipe/'+ recipe.id}>
                                            <div className="card">                                                
                                                <img src={recipe.image} alt={recipe.title}/>
                                                <div className="card-text">
                                                    <h4>{recipe.title}</h4>
                                                    <div className="card-text-details">
                                                        <p><IoTimerOutline/> {recipe.readyInMinutes} min</p>
                                                        <p>Servings: {recipe.servings}</p>
                                                        <p>{recipe.dishTypes}</p>                                                       
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    )
};
