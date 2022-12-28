import { IoHeart } from "react-icons/io5";


export default function FavoriteBtn( {recipe} ) {


    function addFav() {
        // Parse the JSON stored in all Favorites
        var favorites = JSON.parse(localStorage.getItem("favorites")); 
        if(favorites == null) favorites = [];        
        var id = document.getElementById(recipe.id).value;
        var title = document.getElementById(recipe.title).value;
        var image = document.getElementById(recipe.image).value;

        function checkReady() {
            const readyInMinutes = document.getElementById(recipe.readyInMinutes);
            if(readyInMinutes) {
                return readyInMinutes
            } else {
                return null
            }
        }
        function checkServings() {
            const servings = document.getElementById(recipe.servings);
            if(servings) {
                return servings
            } else {
                return null
            }
        }
        function checkDiets() {
            const diets = document.getElementById(recipe.diets);
            if(diets) {
                return diets
            } else {
                return null
            }
        }

        var favRecipe = {
            "id": id,
            "title": title,
            "image": image,
            "readyInMinutes": checkReady,
            "servings": checkServings,
            "diets": checkDiets
        };
        // const isFav = localStorage.getItem(favRecipe)
        // if (isFav) {
        // }
        // else {
            favorites.push(favRecipe);
            localStorage.setItem("favorites", JSON.stringify(favorites));
        // }
    };

    function handleSubmit(e) {
        e.preventDefault();
        addFav();
        console.log(localStorage.getItem("favorites"));
    }


    return (
        <>
        <form 
        onSubmit={handleSubmit}
        >
            <input id={recipe.id} type="hidden" value={recipe.id} />
            <input id={recipe.title} type="hidden" value={recipe.title} />
            <input id={recipe.image} type="hidden" value={recipe.image} />
            <input id={recipe.readyInMinutes} type="hidden" value={recipe.readyInMinutes} />
            <input id={recipe.servings} type="hidden" value={recipe.servings} />
            <input id={recipe.diets} type="hidden" value={recipe.diets} />

            <button 
            id="submit"
            type="submit"
            className="fav-btn" 
            >
                <IoHeart/>
            </button>
        </form>
        </>
    )
};
