import React, { useState, useEffect } from 'react';
import './App.css';
import { ThemeProvider } from "styled-components";
import { useDarkMode } from './hooks/useDarkMode';
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import ToggleMode from "./components/ToogleMode";
import {
  Route,
} from "react-router-dom";
import MainPage from './pages/main';
import MenuPage from './pages/menu';
import CreateScenarioPage from './pages/createScenario';
import MyProfilePage from './pages/profile';
import CreateCharacterPage from './pages/createCharacter';


function App() {

  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />

        <div className="App main-page">
          <div className='top-menu'>

            <ToggleMode
              // @ts-ignore:disable-next-line
              theme={theme}
              // @ts-ignore:disable-next-line
              toggleTheme={themeToggler}
            />

          </div>
          <div style={{height: 'calc(100% - 40px - 10px - 10px)', padding: '0px 10px 5px 10px'}}>

          <Route path='/main'>
            <MainPage />
          </Route>

          <Route path='/find-movie'>
            <div>hi</div>
          </Route>

          <Route path='/menu'>
            <MenuPage />
          </Route>

          <Route path='/create-scenario'>
            <CreateScenarioPage />
          </Route>

          <Route path='/create-character'>
            <CreateCharacterPage />
          </Route>

          <Route path='/my-profile'>
            <MyProfilePage />
          </Route>
          </div>

        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
