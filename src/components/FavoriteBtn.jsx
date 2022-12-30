import { IoHeart } from "react-icons/io5";


export default function FavoriteBtn( {recipe} ) {   

    function deleteItem(present) {
        var favorites = JSON.parse(localStorage.getItem("favorites"));
        favorites.splice(present, 1);        
        // console.log(favorites)
    }

    function addFav() {        
        var favorites = JSON.parse(localStorage.getItem("favorites")); // Parse the JSON stored in all Favorites
        if(favorites == null) favorites = []; // Create array, if it doesnt excist  

        var id = document.getElementById(recipe.id).value;
        var title = document.getElementById(recipe.title).value;
        var image = document.getElementById(recipe.image).value;
        var readyInMinutes = document.getElementById(recipe.readyInMinutes);
        var servings = document.getElementById(recipe.servings);
        var diets = document.getElementById(recipe.diets);

        function checkReady() {
            if(readyInMinutes) {
                return readyInMinutes
            } else {
                return ("")
            }
        }
        function checkServings() {
            if(servings) {
                return servings
            } else {
                return ("")
            }
        }
        function checkDiets() {
            if(diets) {
                return diets
            } else {
                return ("")
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


        const toggleFav = () => {
            const favBtn = document.getElementById("heartIcon")
            let present = false ;

            favorites.map(val => {
                if(JSON.stringify( {...val})===JSON.stringify({...favRecipe}) )
                present = true;
            })
            
            if((present = true)) {
                // present = true
                deleteItem(present)
                favorites.push(favRecipe);
                favBtn.classList.remove("disabled")
                favBtn.classList.add("active")
                console.log("The recipe was removed")
            }
            if (!present) {
                // present = false
                
                favBtn.classList.add("disabled")
                favBtn.classList.remove("active")

                localStorage.setItem('recipe', JSON.stringify(favRecipe))
                favorites.push(favRecipe)
                localStorage.setItem("favorites", JSON.stringify(favorites))
                
                console.log("The recipe is saved")
            }
        }
        toggleFav()
        
    }

   


    function handleSubmit(e) {
        e.preventDefault();
        addFav();
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
            className="fav-btn disabled"
            // className="fav-btn disabled" 
            >
                <IoHeart id="heartIcon" className="disabled"/>
            </button>
        </form>
        </>
    )
};
