const elRecipes = document.querySelector('.recipe-list');
const recipeSearch = document.querySelector("#search-recipes");

const recipeArr = [];

class Recipe {
    constructor(name, ingredients, instructions, username) {
        this.name = name;
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.username = username;
    }
}

async function addNewRecipe() {
    var existingRecipes = JSON.parse(localStorage.getItem("allRecipes"));
    if (existingRecipes == null) existingRecipes = [];
    var recipeName = document.getElementById("new-recipe-name").value;
    var ingredients = document.getElementById("new-ingredients").value;
    var instructions = document.getElementById("new-instructions").value;
    var username = localStorage.getItem("username");
    
    const newRecipe = new Recipe(recipeName, ingredients, instructions, username);

    try {
        const response = await fetch('/api/recipe', {
            method: 'POST',
            headers: { 'content-type': 'application/json' }, 
            body: JSON.stringify(newRecipe),
        });

        const recipes = await response.json();
        localStorage.setItem('recipes', JSON.stringify(recipes));
        window.location.href = 'search.html';
    } 
    catch {
        this.updateRecipesLocal(newRecipe);
    }
}

function updateRecipesLocal(newRecipe) {
    localStorage.setItem("recipe", JSON.stringify(newRecipe));
    existingRecipes.push(newRecipe);
    localStorage.setItem("allRecipes", JSON.stringify(existingRecipes));
    window.location.href = "search.html";
}

const loadRecipeData = async() => {
    let recipes = [];
    try {
        const res = await fetch('/api/recipes');
        const data = await res.json();
        console.log(data);
        localStorage.setItem('recipes', JSON.stringify(recipes));
        
        /*
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
        */

        if (data) {
            elRecipes.innerHTML= "";
        }

        data.map((recipe) => {
            const li = document.createElement('li');

            recipeArr.push(li);

            li.insertAdjacentHTML('afterbegin',
            `
            <div class="recipe-data">
              <img src=${recipe.recipeImage} alt="" srcset="">
              <div>
                <p>${recipe.name}</p>
                <p>${recipe.ingredients}</p>
                <p>${recipe.instructions}</p>
                <p>${recipe.username}</p>
              </div>
            </div>
            `)

            elRecipes.appendChild(li);
        })

    } catch (error) {
        console.log(error);
    }
}

recipeSearch.addEventListener('input', (e) => {
    const val = e.target.value;
    console.log(val);

    recipeArr.filter((currElem) => {
        currElem.innerText.toLowerCase().includes(val.toLowerCase()) ? 
        currElem.classList.remove('hide') : 
        currElem.classList.add('hide');
    })
})


loadRecipeData();
