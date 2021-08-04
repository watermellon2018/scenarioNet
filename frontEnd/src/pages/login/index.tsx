import React, { useState, useEffect } from 'react';
import { IconButton, InputAdornment, InputLabel, FormControl, OutlinedInput } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';


const Login = () => {

    const [isShowPassword, setIsSHowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setIsSHowPassword(!isShowPassword);
    }

    const useStyles = makeStyles((theme) => ({
        margin: {
          margin: theme.spacing(0.8),
        },
        textField: {
          width: '30ch',
        },
      }));
      
      const classes = useStyles();

    return (
        <div className='login'>
           
                <div>
                    <FormControl className={clsx(classes.margin, classes.textField)} size='small' fullWidth={true} required variant="outlined">
                        <InputLabel htmlFor='login'>
                            Логин/почта
                        </InputLabel>
                        <OutlinedInput label='Логин/почта*' id='login' />
                    </FormControl>
                </div>

                <div>
                    <FormControl className={clsx(classes.margin, classes.textField)} size='small' required variant="outlined">
                        <InputLabel htmlFor="password">Пароль</InputLabel>
                        <OutlinedInput
                            label='Пароль*'
                            id='password'
                            type={isShowPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={handleClickShowPassword}
                                    >
                                        {isShowPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </div>

        
        </div>
    )

}

export default Login;