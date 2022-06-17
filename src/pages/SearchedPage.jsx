import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

export default function SearchedPage() {
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

    const getSearched = async (name) => {
        const check = localStorage.getItem(name);
        if (check) {
            setSearchedRecipes(JSON.parse(check));
        } else {
            const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}&number=10`);
            const recipes = await data.json();

            localStorage.setItem(name, JSON.stringify(recipes.results));
            setSearchedRecipes(recipes.results);
        }
    };


    useEffect(() => {
        getSearched(params.search)
    }, [params.search]);


    return (
        <>
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