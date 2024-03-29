import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login'
import { Chat } from './chat/chat'
import { Home } from './home/home'
import { NewRecipe } from './new-recipe/newrecipe';
import { Search } from './search/search';
import { AuthState } from './login/authState';

function App() {
  const [username, setUsername] = React.useState(localStorage.getItem('username') || '');
  const [authState, setAuthState] = React.useState(AuthState.Unknown);

  React.useEffect(() => {
    if (username) {
      fetch(`/api/username/${username}`)
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          }
        })
        .then((user) => {
          const state = user?.authenticated ? AuthState.Authenticated: AuthState.Unauthenticated;
          setAuthState(state);
        });
    } else {
      setAuthState(AuthState.Unauthenticated);
    }
  }, [username]);

  return (
    <BrowserRouter>
      <div class="top text-light">
      <header>
          <h1>Recipes 260</h1>
          <div class="user">
            Welcome:
            <span class="username-top"></span>
          </div>
          <menu class="navbar-nav">
              <li class="nav-item">
                  <NavLink class="nav-link" to="search">Search</NavLink>
              </li>
              <li class="nav-item">
                  <NavLink class="nav-link" to="home">Home</NavLink>
              </li>
              <li class="nav-item">
                  <NavLink class="nav-link" to="">Login</NavLink>
              </li>
          </menu>
        </header>

      <Routes>
        <Route path='/' element={<Login />} exact />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/search' element={<Search />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </div>
  </BrowserRouter>
  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Address unknown</main>
}

export default App;
