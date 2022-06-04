import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


export default function CuisinePage() {
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
        const recipes = await data.json();

        setCuisine(recipes.results);
    };

    useEffect(() => {
        getCuisine(params.type)
    }, [params.type]);


    return (
        <>
            <section className="cuisine">
                <h2>Cuisine - {params.type}</h2>
                <motion.div className="grid" 
                    animate={{opacity: 1}}
                    initial={{opacity: 0}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.5}}>

                    {cuisine.map((item) => {
                        return (
                            <div className="card" key={item.id}>
                                <Link to={'/recipe/'+ item.id}>
                                    <img src={item.image} alt="" />
                                    <h4>{item.title}</h4>
                                </Link>
                            </div>
                        )
                    })}
                </motion.div>
            </section>
        </>
    )
}