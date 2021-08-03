import React, { useState, useEffect } from 'react';
import { IconButton, TextField, 
    InputAdornment, InputLabel,
    FormControl, OutlinedInput, } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import PhotoCamera from '@material-ui/icons/PhotoCamera';


import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import './style.scss';


const RegistationDialog = () => {

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
        <>
            <div className='registration__first-row'>


                <div>
                    <FormControl
                        className={clsx(classes.margin, classes.textField)}
                        size='small'
                        fullWidth={true}
                        required variant="outlined"
                    >
                        <InputLabel htmlFor='name'>
                            Имя
                        </InputLabel>
                        <OutlinedInput label='Имя*' id='name' />
                    </FormControl>



                    <FormControl
                        className={clsx(classes.margin, classes.textField)}
                        size='small'
                        fullWidth={true}
                        required
                        variant="outlined"
                    >
                        <InputLabel htmlFor='lastName'>
                            Фамилия
                        </InputLabel>
                        <OutlinedInput label='Фамилия*' id='lastName' />
                    </FormControl>
                </div>



                <div className='registration__first-row__avatar'>
                    <div className='registration__first-row__avatar__wrapper-div'>
                    <input accept="image/*" style={{display: 'none'}} id="icon-button-file" type="file" />
                    <label style={{height: 'fit-content'}} htmlFor="icon-button-file">
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <PhotoCamera />
                        </IconButton>
                    </label>
                    </div>
                </div>




            </div>
            
            <div>
                <FormControl
                    className={clsx(classes.margin, classes.textField)}
                    size='small'
                    fullWidth={true}
                >
                    <TextField
                        autoComplete='off'
                        id="date"
                        label="Дата рождения"
                        type="date"
                        defaultValue="2017-05-24"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </FormControl>
            </div>

            <div className='registration__second-row'>
                <FormControl
                    className={clsx(classes.margin, classes.textField)}
                    size='small'
                    fullWidth={true}
                    required
                    variant="outlined"
                >
                    <InputLabel htmlFor='login'>
                        Логин
                        </InputLabel>
                    <OutlinedInput label='Логин*' id='login' />
                </FormControl>

                <FormControl
                    className={clsx(classes.margin, classes.textField)}
                    size='small'
                    fullWidth={true}
                    required
                    variant="outlined"
                >
                    <InputLabel htmlFor='email'>
                        Почта
                        </InputLabel>
                    <OutlinedInput label='Почта*' id='email' />
                </FormControl>
            </div>



            <div className='registration__third-row'>
                <FormControl 
                    className={clsx(classes.margin, classes.textField)} 
                    size='small' 
                    required 
                    variant="outlined"
                >
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

                <FormControl
                    className={clsx(classes.margin, classes.textField)}
                    size='small'
                    required
                    variant="outlined"
                >
                    <InputLabel htmlFor="passwordReapeat">Повторите пароль</InputLabel>
                    <OutlinedInput
                        label='Повторите пароль*'
                        id='passwordRepeat'
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


        </>
    )

}

export default RegistationDialog;