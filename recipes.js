const recipes = document.querySelector('.recipe-list');
const recipe = document.querySelector("#search-recipes");

class Recipe {
    constructor(name, ingredients, instructions, username) {
        this.name = name;
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.username = username;
    }
}

function addNewRecipe() {
    var existingRecipes = JSON.parse(localStorage.getItem("allRecipes"));
    if (existingRecipes == null) existingRecipes = [];
    var recipeName = document.getElementById("new-recipe-name").value;
    var ingredients = document.getElementById("new-ingredients").value;
    var instructions = document.getElementById("new-instructions").value;
    var username = localStorage.getItem(username);
    
    const newRecipe = new Recipe(recipeName, ingredients, instructions, username);
    localStorage.setItem("recipe", JSON.stringify(newRecipe));
    existingRecipes.push(newRecipe);
    localStorage.setItem("allRecipes", JSON.stringify(existingRecipes));
    window.location.href = "search.html";
}

const getRecipeData = async() => {
    try {

        /*
        const res = await JSON.parse(localStorage.getItem("allRecipes") || "[]");
        const data = await res.json();
        console.log(data);
        */
        const data = [
        {
            recipeImage: "images/recipe_example1.jpeg",
            recipeName: "Lasagna",
            ingredients: "Lasagna noodles, tomato sauce, onion, ground beef",
            instructions: "Bring water to a boil...",
            username: "jordanfarmar123"
        },
        {
            recipeImage: "images/recipe_example2.jpeg",
            recipeName: "Pita Pizzas",
            ingredients: "Pita bread, pizza sauce, mozzarella cheese, pepperoni",
            instructions: "Preheat oven to 400...",
            username: "pattymills1"
        },
        {
            recipeImage: "images/recipe_example3.jpeg",
            recipeName: "Chicken alfredo",
            ingredients: "Alfredo noodles, heavy cream, butter, parmesan cheese",
            instructions: "Bring water to a boil...",
            username: "chrisandersen99"
        }
        ];

        if (data) {
            recipes.innerHTML= "";
        }

        data.map((recipe) => {
            const li = document.createElement('li');
            li.insertAdjacentHTML('afterbegin',
            `
            <div class="recipe-data">
              <img src=${recipe.recipeImage} alt="" srcset="">
              <div>
                <p>${recipe.recipeName}</p>
                <p>${recipe.ingredients}</p>
                <p>${recipe.instructions}</p>
                <p>${recipe.username}</p>
              </div>
            </div>
            `)

            recipes.appendChild(li);
        })

    } catch (error) {
        console.log(error);
    }
}

getRecipeData();
