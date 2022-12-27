import { IoHeart } from "react-icons/io5";


export default function FavoriteBtn( {recipe} ) {
        
    // const removeFav = (e, favRecipe) => {
    //     this.setState(prevState => ({
    //       bag: prevState.bag.filter(d => d !== favRecipe)
    //     }));
    //     // actual localStorage item removing 
    //         let favorites  = JSON.parse(localStorage.getItem("favorites"))
    //         favorites.splice(favorites.indexOf(favRecipe), 1)
    //         localStorage.setItem("recipe", JSON.stringify(favorites));
    //   };


    function addFav() {
        // Parse the JSON stored in all Favorites
        var favorites = JSON.parse(localStorage.getItem("favorites")); 
        if(favorites == null) favorites = [];        
        var id = document.getElementById(recipe.id).value;
        var title = document.getElementById(recipe.title).value;
        var image = document.getElementById(recipe.image).value;
        var readyInMinutes = document.getElementById(recipe.readyInMinutes).value;
        var servings = document.getElementById(recipe.servings).value;
        var diets = document.getElementById(recipe.diets).value;

        var favRecipe = {
            "id": id,
            "title": title,
            "image": image,
            "readyInMinutes": readyInMinutes,
            "servings": servings,
            "diets": diets
        };
        const isFav = localStorage.getItem(favRecipe)
        if (isFav) {
            // removeFav()
            // let favorites  = JSON.parse(localStorage.getItem("favorites"))
            // favorites.splice(favorites.indexOf(favRecipe), 1)
            // favorites.push(favRecipe);
        }
        else {
            favorites.push(favRecipe);
            localStorage.setItem("favorites", JSON.stringify(favorites));
        }
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
