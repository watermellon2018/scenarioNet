import React, { FC, useState, useEffect } from 'react';
import { Button } from '@material-ui/core';

import PersonRoundedIcon from '@material-ui/icons/PersonRounded'; // светлая тема
import SearchIcon from '@material-ui/icons/Search';
import Card from '@material-ui/core/Card';
import {
    useHistory
} from "react-router-dom";
import SaveIcon from '@material-ui/icons/Save';
import './style.scss';


interface WButtonI {
    title?: string;
    onClick?: () => void;
    icon?: any;

}

const WButton: FC<WButtonI> = ({ 
    title = '',
    onClick = () => {},
    icon,
}) => {


    return (


            <Card raised={true} className='wbutton__wrap'>
                {icon}

                <Button onClick={onClick}>
                    {title}
                </Button>
            </Card>
       /*  </div> */


    );
}

export default WButton;