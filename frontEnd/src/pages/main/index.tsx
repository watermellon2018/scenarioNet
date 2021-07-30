import React, { useState, useEffect } from 'react';
import '../../App.css';
import { Button } from '@material-ui/core';

import PersonRoundedIcon from '@material-ui/icons/PersonRounded'; // светлая тема
import SearchIcon from '@material-ui/icons/Search';
import Card from '@material-ui/core/Card';
import {
    useHistory
} from "react-router-dom";


const MainPage = () => {

    const history = useHistory();

    const handleFindMovie = () => {
        history.push('/find-movie');
    }

    const handleLogin = () => {
        history.push('/login');
    }
    
    const handleRegistation = () => {
        history.push('/registration');
    }

    return (


        <div className='middle-menu'>

            <div className='item-middle-menu'>
                <Card raised={true} className='wrap'>
                    <SearchIcon />

                    <Button onClick={handleFindMovie}>
                        Найти фильм
                </Button>
                </Card>
            </div>

            <div className='item-middle-menu'>
                <Card raised={true} className='wrap'>
                    <PersonRoundedIcon />

                    <Button onClick={handleLogin} size='small'>
                        Войти
                </Button>
                    <Button onClick={handleRegistation} size='small'>
                        Зарегистрироваться
                </Button>
                </Card>
            </div>

        </div>
    );
}

export default MainPage;