import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RecipePage() {
    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState("instructions");

    // Fetch clicked recipe from API
    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const detailData = await data.json();
        setDetails(detailData);
        console.log(detailData);
    };

    useEffect(() => {
        fetchDetails();
    }, [params.name]);


    return (
        <>
        <div className="detail-wrapper">
            <div>
                <h2>{details.title}</h2>
                <img src={details.image} alt=""/>
            </div>
            <div className="info">
                <button onClick={() => setActiveTab("instructions")} className={activeTab === 'instructions' ? 'active' : ''}>
                    instructions
                </button>
                
                <button onClick={() => setActiveTab("ingredients")} className={activeTab === 'ingredients' ? 'active' : ''}>
                    ingredients
                </button>

                {activeTab === 'instructions' && (
                <div>
                    <h4>Summary</h4>
                    <p dangerouslySetInnerHTML={{__html: details.summary}}></p> <br/><br/>
                    <h3>Instructions</h3>
                    <p dangerouslySetInnerHTML={{__html: details.instructions}}></p>
                </div> 
                )}
                {activeTab === 'ingredients' && (
                <ul>
                    <h3>Ingredients</h3>
                    {details.extendedIngredients.map((ingredient) =>
                    <li key={ingredient.id}>{ingredient.original}</li>
                    )}
                </ul>
                )}

            </div>
        </div>
        </>
    )
}

export default RecipePage