import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


import './style.scss';


// TODO:: боковая скрытая панель для настройки генерации
const CreateCharacterPage = () => {

    const handleGenerate = () => {

    };

    return (
        <div className='create-character'>
            <div className='create-character__dispay-character box-wrapper'>
                <Card>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt='Сгенерированный персонаж'
                            height="140"
                            image={process.env.PUBLIC_URL + '/static/images/spacei.jpg'}
                            title="Contemplative Reptile"
                        />
    
                    </CardActionArea>
                    <CardActions>
                        <Button size='small' variant='outlined' onClick={handleGenerate}>
                            Сгенерировать
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );

};

export default CreateCharacterPage;