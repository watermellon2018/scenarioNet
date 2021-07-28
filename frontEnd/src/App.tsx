import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, IconButton } from '@material-ui/core';
import { ThemeProvider } from "styled-components";
import { useDarkMode } from './hooks/useDarkMode';
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import ToggleMode from "./components/ToogleMode";


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

          <div className='middle-menu'>

            <div className='item-middle-menu' style={{border: '1px solid blue'}}>
            <Button>
              Найти подходящий фильм
            </Button>
            </div>

            <div className='item-middle-menu' style={{border: '1px solid red'}}>
            <Button>
              Войти/Зарегистрироваться
            </Button>
            </div>
       
          </div>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
