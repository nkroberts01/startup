import React from 'react';

export function NewRecipe() {
    return (
        <main class="container-fluid text-center">
        <div class="container">
            <h1 class="login-header">New Recipe</h1>
            <form method="get" action="index.html">
                <div class="form-outline mb-4">
                    <label for="new-recipe-name">Recipe Name</label>
                    <textarea id="new-recipe-name" name="new-recipe-name" rows="1" cols="33" placeholder="Lasagna"></textarea>
                </div>
                <div class="form-outline mb-4">
                    <label for="new-ingredients">Ingredients</label>
                    <textarea id="new-ingredients" name="new-ingredients" rows="7" cols="33" placeholder="-Lasgna Noodles"></textarea>
                </div>
                <div class="form-outline mb-4">
                    <label for="new-instructions">Instructions</label>
                    <textarea id="new-instructions" name="new-instructions" rows="9" cols="33" placeholder="-Bring water to a boil"></textarea>
                </div>
                <button type="button" class="btn btn-primary btn-block mb-4" onclick="addNewRecipe()">Save</button>
            </form>
        </div>
    </main>   
    );
}