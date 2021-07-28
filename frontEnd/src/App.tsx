import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, IconButton } from '@material-ui/core';
import { ThemeProvider } from "styled-components";
import { useDarkMode } from './hooks/useDarkMode';
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import ToggleMode from "./components/ToogleMode";
import PersonRoundedIcon from '@material-ui/icons/PersonRounded'; // светлая тема
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded'; // темная тема
import SearchIcon from '@material-ui/icons/Search';
import Card from '@material-ui/core/Card';


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

            <div className='item-middle-menu'>
              <Card raised={true}  className='wrap'>
                <SearchIcon />
                <Button>
                  Найти фильм
            </Button>
              </Card>
            </div>

            <div className='item-middle-menu'>
              <Card raised={true} className='wrap'>
                <PersonRoundedIcon />

                <Button size='small'>
                  Войти
                </Button>
                <Button size='small'>
                  Зарегистрироваться
                </Button>
              </Card>
            </div>

          </div>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
