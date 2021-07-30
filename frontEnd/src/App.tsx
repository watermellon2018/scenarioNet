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

          <Route path='/main'>
            <MainPage />
          </Route>

          <Route path='/find-movie'>
            <div>hi</div>
          </Route>

          <Route path='/registration'>
            <div>Hello</div>
          </Route>

          <Route path='/login'>
            <div>Login</div>
          </Route>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
