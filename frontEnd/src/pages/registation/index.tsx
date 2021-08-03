import React, { useState, useEffect } from 'react';
import { IconButton, TextField, Avatar, InputAdornment, InputLabel, FormControl, OutlinedInput, Button } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';


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
            <div style={{ display: 'flex' }}>


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





                <label htmlFor="upload-photo">
                    <input
                        style={{ display: 'none' }}
                        id="upload-photo"
                        name="upload-photo"
                        type="file"
                    />

                    <Button color="secondary" variant="contained" component="span">
                        Upload button
                    </Button>
                </label>



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
                        // className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </FormControl>
            </div>

            <div style={{ display: 'flex' }}>
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



            <div style={{ display: 'flex' }}>
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