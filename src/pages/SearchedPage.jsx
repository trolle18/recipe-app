import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import SmallNav from '../components/SmallNav';

export default function SearchedPage() {
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

    // Fetch searched recipes from API
    const getSearched = async (name) => {
        const check = localStorage.getItem(name);  // Checks if recipes is saved in local storage
        if (check) {
            setSearchedRecipes(JSON.parse(check));
        } else {  // If not, get from API and save to local storage   
            const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}&number=10`);
            const recipes = await data.json();
            localStorage.setItem(name, JSON.stringify(recipes.results));  // Recipes are saved to local storage, as Spoonaculars API calls are limited
            setSearchedRecipes(recipes.results);
        }
    };


    useEffect(() => {
        getSearched(params.search)
    }, [params.search]);



    return (
        <>
        <SmallNav/>
        <section className="cuisine">
            <h2>Search result for "{params.search}"</h2>
            <section className="grid">
                {searchedRecipes.map((item) => {
                    return (
                        <div className="card" key={item.id}>
                                <Link to={'/recipe/'+ item.id}>
                                <img src={item.image} alt="" />
                                <h4>{item.title}</h4>
                            </Link>
                        </div>
                    )
                })}
            </section>
        </section>
        </>
    )
};