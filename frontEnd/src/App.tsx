import React, { useState, useEffect } from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes"

function App() {

  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div className="App">
          <Button onClick={themeToggler} variant="contained">Default</Button>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
