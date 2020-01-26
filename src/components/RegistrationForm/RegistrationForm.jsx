import React from 'react';
import PropTypes from 'prop-types';
import AuthContext from '../../context/AuthContext';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';

function RegistrationForm (props) {
    const { login } = React.useContext(AuthContext);
    const [ email, setEmail ] = React.useState("");
    const [ password, setPassword ] = React.useState("");
    const [ firstName, setFirstName ] = React.useState("");
    const [ lastName, setLastName ] = React.useState("");
    const theme = useTheme();


    return (
        <form data-testid='registration-form' className='formTag' onSubmit={() => login(email, password)}>
            <Paper elevatio={1} style={{padding: theme.spacing(6, 6)}}>
                <Grid container   direction="column">
                    <Grid item xs={12}>
                        <Typography variant="h3" component="h1" gutterBottom>
                            Регистрация
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        Уже зарегистрированы? 
                        <Link data-testid='link-login' underline='none' onClick={() => props.changePage('LOGIN')}> Войти</Link>   
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            data-testid='input-email'
                            onChange={(e) => setEmail(e.target.value)} 
                            value={email} 
                            label='Адрес электронной почты' 
                            placeholder='Адрес электронной почты' 
                            margin='dense'
                            required
                            fullWidth />
                    </Grid>
                    <Grid item container xs={12} spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                data-testid='input-fname'
                                onChange={(e) => setFirstName(e.target.value)} 
                                name='firstName' 
                                value={firstName} 
                                label='Имя' 
                                placeholder='Имя'
                                margin='dense'
                                required
                                fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                data-testid='input-lname' 
                                onChange={(e) => setLastName(e.target.value)} 
                                name='lastName' 
                                value={lastName} 
                                label='Фамилия' 
                                placeholder='Фамилия' 
                                margin='dense'
                                required
                                fullWidth />
                        </Grid>
                    </Grid>                  
                    <Grid item xs={12}>
                        <TextField
                            data-testid='input-pass' 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            name='password' 
                            label='Пароль' 
                            placeholder='Пароль'
                            margin='dense' 
                            required
                            fullWidth />
                    </Grid>
                    <Grid item xs={12} container justify='flex-end' >
                        <Button data-testid='button-login' color='secondary' variant="contained" type='submit' >Войти</Button>
                    </Grid>
                </Grid>
            </Paper>          
        </form>
    )
}

RegistrationForm.propTypes = {
    changePage: PropTypes.func.isRequired
}

export default RegistrationForm;