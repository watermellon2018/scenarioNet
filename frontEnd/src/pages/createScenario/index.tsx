import React, { useState, useEffect } from 'react';
import CreateIcon from '@material-ui/icons/Create';
import {
    useHistory
} from "react-router-dom";
import WButton from '../../components/button';
import WButtonGroup from '../../components/groupButton';
import MovieIcon from '@material-ui/icons/Movie';
import PeopleIcon from '@material-ui/icons/People';
import InfoIcon from '@material-ui/icons/Info';


const CreateScenarioPage = () => {


    return (


        <WButtonGroup>

            <WButton icon={<InfoIcon />} title='Информация о фильме'/>

            <WButton icon={<PeopleIcon />} title='Создание персонажей' />

            <WButton icon={<CreateIcon />} title='Написание сценария' />

            <WButton icon={<MovieIcon />} title='Создание фильма' />
        

        </WButtonGroup>


    );
}

export default CreateScenarioPage;