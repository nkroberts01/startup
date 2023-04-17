import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Login } from './login/login'
import { Chat } from './chat/chat'
import { Home } from './home/home'
import { NewRecipe } from './new-recipe/newrecipe';
import { Search } from './search/search';

function App() {
  return (
    <div class="top text-light">
    <header>
        <h1>Recipes 260</h1>
        <div class="user">
          Welcome:
          <span class="username-top"></span>
        </div>
        <menu class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="search.html">Search</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="home.html">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="index.html">Login</a>
            </li>
        </menu>
      </header>

    <Login />

  </div>
  );
}

export default App;
