import React from 'react';
import { useDispatch } from 'react-redux';
import { registrationRequest } from '../../modules/auth';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';

function RegistrationForm ({history}) {
    const [ email, setEmail ] = React.useState("");
    const [ password, setPassword ] = React.useState("");
    const [ name, setName ] = React.useState("");
    const [ surname, setSurname ] = React.useState("");
    
    const theme = useTheme();
    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault();

        const payload = {
            data: {
                email,
                password,
                name,
                surname
            },
            history           
        };
        
        dispatch(registrationRequest(payload));

        setEmail("");
        setPassword(""); 
        setName("");
        setSurname("");       
    };

    return (
        <form data-testid='registration-form' className='formTag' onSubmit={handleSubmit}>
            <Paper elevatio={1} style={{padding: theme.spacing(6, 6)}}>
                <Grid container   direction="column">
                    <Grid item xs={12}>
                        <Typography variant="h3" component="h1" gutterBottom>
                            Регистрация
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        Уже зарегистрированы? 
                        <Link data-testid='link-login' to='/login'> Войти</Link>   
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
                                onChange={(e) => setName(e.target.value)} 
                                name='name' 
                                value={name} 
                                label='Имя' 
                                placeholder='Имя'
                                margin='dense'
                                required
                                fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                data-testid='input-lname' 
                                onChange={(e) => setSurname(e.target.value)} 
                                name='surname' 
                                value={surname} 
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

export default RegistrationForm;