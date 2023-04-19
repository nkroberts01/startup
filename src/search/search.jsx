import React from 'react';

export function Search() {

    const [recipes, setRecipes] = React.useState([]);

    React.useEffect(() => {
        fetch('/api/recipes')
            .then((response) => response.json())
            .then((recipes) => {
                setRecipes(recipes);
                localStorage.setItem('recipes', JSON.stringify(recipes));
            })
            .catch(() => {
                const recipesText = localStorage.getItem('recipes');
                if (recipesText) {
                    setRecipes(JSON.parse(recipesText));
                }
            });
    }, []);

    const recipeResults = [];
    if (recipes.length) {
        for (const [i, recipe] of recipes.entries()) {
            recipeResults.push(
            <div key={i} class="recipe-data">
                <p>${recipe.name}</p>
                <p>${recipe.ingredients}</p>
                <p>${recipe.instructions}</p>
                <p>${recipe.username}</p>
            </div>
            );
        }
    } else {
        recipeResults.push(
            <div key='0'>
                <p>Log in to see recipes</p>
            </div>
        )
    }


    return (
        <main class="container-fluid text-center">
      
        <section class="live-filter">
          <div class="search">
            <p>Search for a recipe!</p>
            <input type="text" name="search-recipes" id="search-recipes" placeholder="Search..."/>
          </div>
  
          <div class="recipe-info">
            <ul class="recipe-list">
              <li>{recipeResults}</li>
            </ul>
          </div>
        </section>
  
      </main>
    );
}