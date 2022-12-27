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
        var title = document.getElementById(recipe.id).value;
        var id = document.getElementById(recipe.id).id;
        var favRecipe = {
            "id": id,
            "title": title
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
            <input id={recipe.id} type="hidden" value={recipe.title} />
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
