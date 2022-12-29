import { IoHeart } from "react-icons/io5";


export default function FavoriteBtn( {recipe} ) {

    // var id = document.getElementById(recipe.id);
    // var title = document.getElementById(recipe.title);
    // var image = document.getElementById(recipe.image);
    // var favorites = JSON.parse(localStorage.getItem("favorites")); 

    // function checkReady() {
    //     const readyInMinutes = document.getElementById(recipe.readyInMinutes);
    //     if(readyInMinutes) {
    //         return readyInMinutes
    //     } else {
    //         return null
    //     }
    // }
    // function checkServings() {
    //     const servings = document.getElementById(recipe.servings);
    //     if(servings) {
    //         return servings
    //     } else {
    //         return null
    //     }
    // }
    // function checkDiets() {
    //     const diets = document.getElementById(recipe.diets);
    //     if(diets) {
    //         return diets
    //     } else {
    //         return null
    //     }
    // }

    // var favRecipe = {
    //     "id": id,
    //     "title": title,
    //     "image": image,
    //     "readyInMinutes": checkReady,
    //     "servings": checkServings,
    //     "diets": checkDiets
    // };


    function addFav() {
        var id = document.getElementById(recipe.id).value;
        var title = document.getElementById(recipe.title).value;
        var image = document.getElementById(recipe.image).value;
        var favorites = JSON.parse(localStorage.getItem("favorites")); 

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


        if(favorites == null) favorites = [];   

        let present = false ;

        favorites.map(val => {
            if(JSON.stringify( {...val})===JSON.stringify({...favRecipe}) )
            present = true;
        })

        if(present) {
            console.log("The object is present")
            // localStorage.removeItem("favorites", JSON.stringify(favorites))
            localStorage.removeItem('recipe', JSON.stringify(favRecipe))
            // favorites.push(favRecipe)
            
        } else {
            console.log("The object is not present")
            
            // localStorage.setItem("favorites", JSON.stringify(favorites))
            localStorage.setItem('recipe', JSON.stringify(favRecipe))
            // favorites.push(favRecipe)
        }

        localStorage.setItem("favorites", JSON.stringify(favorites))
        // favorites.push(favRecipe)
        

        // if(favorites == null) favorites = [];        
        // if (isFav) {
        // }
        // else {
        //     favorites.push(favRecipe);
        //     localStorage.setItem("favorites", JSON.stringify(favorites));
        // // }

        // // // Put the recipe into storage
        // localStorage.setItem('recipe', JSON.stringify(favRecipe));

        // // Retrieve the recipe from storage
        // var retrievedRecipe = localStorage.getItem('recipe');

    };

    // function isStored() {
    //     // let obj = {name:"user",id:1};
    //     // let arr = [{name:"user",id:2},{name:"user",id:3}];
    //     let present = false ;
    //     favorites.map(val => {
    //     if(JSON.stringify( {...val})===JSON.stringify({...favRecipe}) )
    //         present = true ;
    //     })
    //     if(present)console.log("The object is present")
    //     else console.log("The object is not present");
    // }
    
    // const isStored = () => {
    //     // const item = document.getElementById(recipe.id);
    //     // const submitBtn = document.getElementById("submit");

    //     // if (localStorage.getItem("favorites").hasOwnProptery(item)) {
    //     // if (item in localStorage) {
    //     //     submitBtn.classList.remove("disabled")
    //     //     submitBtn.classList.add("active")
    //     // } else {
    //     //     submitBtn.classList.add("disabled")
    //     //     submitBtn.classList.remove("active")
    //     // }
    //     // ----------------
    //     if(localStorage.getItem(item) === null){
    //         console.log("Item does not exist in localstoarge");
    //     }else{
    //        console.log("Item exists in localstorage");
    //     }
    // }



    function handleSubmit(e) {
        e.preventDefault();
        addFav();

        // isStored();
        // console.log(localStorage.getItem("favorites"));
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
            >
                <IoHeart/>
            </button>
        </form>
        </>
    )
};



// function addFav() {
//     // Parse the JSON stored in all Favorites
//     // var favorites = JSON.parse(localStorage.getItem("favorites")); 

//     if(favorites == null) favorites = [];        
//     // var id = document.getElementById(recipe.id).value;
//     // var title = document.getElementById(recipe.title).value;
//     // var image = document.getElementById(recipe.image).value;

//     // function checkReady() {
//     //     const readyInMinutes = document.getElementById(recipe.readyInMinutes);
//     //     if(readyInMinutes) {
//     //         return readyInMinutes
//     //     } else {
//     //         return null
//     //     }
//     // }
//     // function checkServings() {
//     //     const servings = document.getElementById(recipe.servings);
//     //     if(servings) {
//     //         return servings
//     //     } else {
//     //         return null
//     //     }
//     // }
//     // function checkDiets() {
//     //     const diets = document.getElementById(recipe.diets);
//     //     if(diets) {
//     //         return diets
//     //     } else {
//     //         return null
//     //     }
//     // }

//     // var favRecipe = {
//     //     "id": id,
//     //     "title": title,
//     //     "image": image,
//     //     "readyInMinutes": checkReady,
//     //     "servings": checkServings,
//     //     "diets": checkDiets
//     // };
//     // const isFav = localStorage.getItem(favRecipe)
//     // if (isFav) {
//     // }
//     // else {
//         favorites.push(favRecipe);
//         localStorage.setItem("favorites", JSON.stringify(favorites));
//     // }

//     // // Put the recipe into storage
//     localStorage.setItem('recipe', JSON.stringify(favRecipe));

//     // // Retrieve the recipe from storage
//     // var retrievedRecipe = localStorage.getItem('recipe');

//     // console.log('retrievedRecipe: ', JSON.parse(retrievedRecipe));
// };

// function isStored() {
//     // let obj = {name:"user",id:1};
//     // let arr = [{name:"user",id:2},{name:"user",id:3}];
//     let present = false ;
//     favorites.map(val => {
//     if(JSON.stringify( {...val})===JSON.stringify({...favRecipe}) )
//         present = true ;
//     })
//     if(present)console.log("The object is present")
//     else console.log("The object is not present");
// }

// // const isStored = () => {
// //     // const item = document.getElementById(recipe.id);
// //     // const submitBtn = document.getElementById("submit");

// //     // if (localStorage.getItem("favorites").hasOwnProptery(item)) {
// //     // if (item in localStorage) {
// //     //     submitBtn.classList.remove("disabled")
// //     //     submitBtn.classList.add("active")
// //     // } else {
// //     //     submitBtn.classList.add("disabled")
// //     //     submitBtn.classList.remove("active")
// //     // }
// //     // ----------------
// //     if(localStorage.getItem(item) === null){
// //         console.log("Item does not exist in localstoarge");
// //     }else{
// //        console.log("Item exists in localstorage");
// //     }
// // }



// function handleSubmit(e) {
//     e.preventDefault();
//     addFav();

//     // isStored();
//     // console.log(localStorage.getItem("favorites"));
// }