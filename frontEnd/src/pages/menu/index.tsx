import React, { useState, useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import CreateIcon from '@material-ui/icons/Create';
import BuildIcon from '@material-ui/icons/Build';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import PersonIcon from '@material-ui/icons/Person';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import {
    useHistory
} from "react-router-dom";
import WButton from '../../components/button';
import WButtonGroup from '../../components/groupButton';


const MenuPage = () => {

    const history = useHistory();
    


    const handleProfile = () => {
        history.push('/my-profile');
    }

    return (


        <WButtonGroup>

            <WButton icon={<SearchIcon />} title='Найти фильм'/>

            <WButton icon={<BuildIcon />} title='Создание фильма' />

            <WButton icon={<CreateIcon />} title='Создание сценария' />

            <WButton icon={<VideoLibraryIcon />} title='Моя библиотека' />

            <WButton 
                icon={<PersonIcon color='primary' />} 
                title='Мой профиль' 
                onClick={handleProfile}
            />

            <WButton icon={<HelpOutlineIcon />} title='Тут что-то будет' />          

        </WButtonGroup>


    );
}

export default MenuPage;