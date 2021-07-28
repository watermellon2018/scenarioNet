import React, { FC } from 'react'
import { func, string } from 'prop-types';
import styled from "styled-components";
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded';
import NightsStayRoundedIcon from '@material-ui/icons/NightsStayRounded';

const IconButton = styled.button`
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  padding-top: 3px;
  
`;

interface ToogleI {
    theme?: string;
    toggleTheme?: () => void;
}

const ToggleMode: FC<ToogleI> = ({ theme = 'light', toggleTheme = () => { } }) => {
    return (
        <IconButton
            onClick={toggleTheme}
        >
            {theme === 'light' ?
                <WbSunnyRoundedIcon color='primary' /> :
                <NightsStayRoundedIcon color='secondary' />}
        </IconButton>
    );
};

export default ToggleMode;
