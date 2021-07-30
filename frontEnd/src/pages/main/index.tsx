import React, { useState, useEffect } from 'react';
import '../../App.css';
import { Button, Dialog } from '@material-ui/core';

import PersonRoundedIcon from '@material-ui/icons/PersonRounded'; // светлая тема
import SearchIcon from '@material-ui/icons/Search';
import Card from '@material-ui/core/Card';
import {
    useHistory
} from "react-router-dom";
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';

import { makeStyles } from '@material-ui/core/styles';
import Login from '../login';

const PaperComponent = (props: any) => {
    return (
        <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
            <Paper {...props} />
        </Draggable>
    );
}

const MainPage = () => {

    const [isOpenLogin, setIsOpenLogin] = useState(false);

    const closeLoginDialog = () => {
        setIsOpenLogin(false);
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
        history.push('/registration');
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

            <Dialog
                open={isOpenLogin}
                onClose={closeLoginDialog}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
            >

                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    Авторизация
                </DialogTitle>

                <DialogContent>

                   <Login />                   

                </DialogContent>

                <DialogActions>

                    <Button onClick={handleAuthorization} color="primary">
                        Войти
                    </Button>
                    <Button autoFocus onClick={closeLoginDialog} color="primary">
                        Закрыть
                    </Button>

                </DialogActions>

            </Dialog>
        </>
    );
}

export default MainPage;