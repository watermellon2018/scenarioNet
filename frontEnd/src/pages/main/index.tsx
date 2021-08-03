import React, { useState, useEffect } from 'react';
import '../../App.css';
import { Button } from '@material-ui/core';

import PersonRoundedIcon from '@material-ui/icons/PersonRounded'; // светлая тема
import SearchIcon from '@material-ui/icons/Search';
import Card from '@material-ui/core/Card';
import {
    useHistory
} from "react-router-dom";

import Login from '../login';
import RegistationDialog from '../registation';
import WDialog from '../../components/dialog';


const MainPage = () => {

    const [isOpenLogin, setIsOpenLogin] = useState(false);
    const [isOpenRegistation, setIsOpenRegistation] = useState(false);

    const closeLoginDialog = () => {
        setIsOpenLogin(false);
    }

    const closeRegistrationDialog = () => {
        setIsOpenRegistation(false);
    }

    const history = useHistory();

    const handleFindMovie = () => {
        history.push('/find-movie');
    }

    const handleLogin = () => {
        setIsOpenLogin(true);
    }

    const handleAuthorization = () => {

    }

    const handleRegistation = () => {
        setIsOpenRegistation(true);
        //history.push('/registration');
    }

    return (


        <>
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

            <WDialog
                isOpen={isOpenLogin}
                closeDialog={closeLoginDialog}
                title="Авторизация"
                okTitle="Войти"
                handleCancel={closeLoginDialog}
                handleOk={handleAuthorization}
            >
                <Login />

            </WDialog>


            <WDialog
                isOpen={isOpenRegistation}
                closeDialog={closeRegistrationDialog}
                title="Регистрация"
                okTitle="Зарегистрироваться"
                handleCancel={closeRegistrationDialog}
                handleOk={handleRegistation}
            >

                <RegistationDialog />

            </WDialog>
        </>
    );
}

export default MainPage;