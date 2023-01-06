/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import SmallNav from "../components/SmallNav";

function RecipePage() {
    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState("instructions");

    // Fetch clicked recipe from API
    const fetchDetails = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const detailData = await api.json();
        setDetails(detailData);
        console.log(detailData);
    };

    useEffect(() => {
        fetchDetails();
    }, [params.name]);


    return (
        <>
        <SmallNav/>
        <section className="detail-wrapper"> 
        <button></button>
            <div className="detail-wrapper__header">
               <h1>{details.title}</h1>
                <div className="img-cntr">
                    <img src={details.image} alt=""/>
                </div>                
            </div>

            <div className="info">
                <div className="info__tabs">
                    <button onClick={() => setActiveTab("instructions")} className={activeTab === 'instructions' ? 'active' : ''}>instructions</button>                    
                    <button onClick={() => setActiveTab("ingredients")} className={activeTab === 'ingredients' ? 'active' : ''}>ingredients</button>
                </div>

                {activeTab === 'instructions' && (
                <>
                <div className="info__text">
                    <div className="text-section summary">
                        <h3>Summary</h3>
                        <p dangerouslySetInnerHTML={{__html: details.summary}}></p>
                    </div>
                </div>
                <div className="info__text">
                    <div className="text-section">
                        <h3>Instructions</h3>
                        <p dangerouslySetInnerHTML={{__html: details.instructions}}></p>
                    </div>
                </div> 
                </>
                )}


                {activeTab === 'ingredients' && (                
                <div className="info__text">
                   
                    <h3>Ingredients</h3>
                    <ol>
                        {details.extendedIngredients.map((ingredient) =>
                        <li key={ingredient.id}>{ingredient.original}</li>
                        )}
                    </ol>
                </div>
                )}

            </div>
            <Footer/>
        </section>
        </>
    )
}

export default RecipePage