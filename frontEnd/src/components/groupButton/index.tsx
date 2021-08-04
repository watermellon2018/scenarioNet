import React, { FC, useState, useEffect } from 'react';
import './style.scss';
import { makeStyles } from '@material-ui/core/styles';


interface WButtonGroupI {
    children: any;
}

const useStyles = makeStyles((theme) => ({
    center: {
        display: 'flex'
    },
}));

const WButtonGroup: FC<WButtonGroupI> = ({ children }) => {

    const classes = useStyles();


    return (

        <div className='wbutton-group'>
            <div className='wbutton-group__wrapper'>
                {children}
            </div>
        </div>


    );
}

export default WButtonGroup;