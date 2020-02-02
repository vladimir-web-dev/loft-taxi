import React, { useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import { cardUpdateRequest, cardDetailsRequest } from '../../modules/card'
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import  {DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import Button from '@material-ui/core/Button';
import { getCard, getToken } from '../../modules/card'
import { useForm, Controller  } from "react-hook-form"

export function ProfileForm () {
    const {register, setValue, getValues, handleSubmit, control  } = useForm();

    const theme = useTheme();
    const dispatch = useDispatch();
    const token = useSelector( state => getToken(state.authReducer));
    const card = useSelector( state => getCard(state.cardReducer));

    if(Object.keys(card).length > 0) {
        setValue('expiryDate',card.expiryDate);
        setValue('cardName',card.cardName);
        setValue('cvc',card.cvc);
        setValue('cardNumber',card.cardNumber);
  
    }

    const onSubmit = (data, e) => {
        e.preventDefault();
        const payload = {
            ...data,
            token
        };
        console.log(payload)
        dispatch(cardUpdateRequest(payload));
    };

    useEffect(() => {
        dispatch(cardDetailsRequest(token));      
    }, []);

    return (
        <Paper elevatio={1} style={{padding: theme.spacing(6, 6)}}>
            <form data-testid='login-form' className='formTag' onSubmit={handleSubmit(onSubmit)}>
                <Grid container alignItems='center' direction="column">
                    <Grid item>
                        <Typography variant="h3" component="h1" gutterBottom>
                            Профиль
                        </Typography>
                    </Grid>
                    <Grid item container xs={12} >
                        <Grid item container xs={6} >
                            <Paper elevatio={1} style={{padding: theme.spacing(2, 2)}}>
                                <Grid container   direction="column">
                                    <Grid item xs={12}>
                                        <TextField
                                            inputRef={register}
                                            data-testid='input-card-number' 
                                            name='cardNumber'
                                            label='Номер карты' 
                                            placeholder='0000 0000 0000 0000'
                                            margin='dense'
                                            required
                                            fullWidth />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <MuiPickersUtilsProvider utils={MomentUtils}>
                                            <Controller as={DatePicker} name='expiryDate' control={control} />
                                        </MuiPickersUtilsProvider>
                                    </Grid>        
                                </Grid>        
                            </Paper>
                        </Grid>
                        <Grid item container xs={6} >
                            <Paper elevatio={1} style={{padding: theme.spacing(2, 2)}}>
                                <Grid container   direction="column">
                                    <Grid item xs={12}>
                                        <TextField
                                            inputRef={register}
                                            data-testid='input-card-number' 
                                            name='cardName'
                                            label='Имя владельца' 
                                            placeholder='USER NAME'
                                            margin='dense'
                                            required
                                            fullWidth />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            inputRef={register}
                                            data-testid='input-card-number' 
                                            name='cvc'
                                            label='CVC ' 
                                            placeholder='CVC '
                                            margin='dense'
                                            required
                                            fullWidth />
                                    </Grid>
                                </Grid>    
                            </Paper>
                        </Grid> 
                    </Grid>  
                    <Grid item xs={12} container justify='center' >
                        <Button data-testid='button-login'  color='secondary' variant="contained" type='submit' >Сохранить</Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
            	
    )
}