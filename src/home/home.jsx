import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { NewRecipe } from '../new-recipe/newrecipe';
import { Chat } from '../chat/chat';

export function Home() {
    return (
        <main className="container-fluid text-center">
        <span></span>
        <div className="flex-container">
            <p className="home-header">Recipes260 is an application designed to organize your own recipes, 
            share them with others, and find inspiration for your own cooking.
            Create an account and add friends to get started.</p>
        </div>  
        <span></span>    

        <div className="image1">
            <img src="/images/recipe_example2.jpeg" alt="Picture of food"/>
        </div>
        <span></span>

        
        <form action="newrecipe.html">
            <input className="button-newrecipe" type="submit" value="New Recipe" />
        </form>

        <form action="chat.html">
          <input className="button-newrecipe" type="submit" value="Messages" />
        </form>
        
        <div className="gitfooter">
          <span className="text-reset">Nathan Roberts</span>
          <a href="https://github.com/nkroberts01/startup">Github</a>
        </div>

    </main>
    );
}