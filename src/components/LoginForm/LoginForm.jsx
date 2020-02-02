import React from 'react';
import { useDispatch } from 'react-redux';
import { authRequest } from '../../modules/auth';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

function LoginForm () {
    const [ email, setEmail ] = React.useState("");
    const [ password, setPassword ] = React.useState("");

    const theme = useTheme();
    const dispatch = useDispatch()
 
    const handleSubmit = e => {
        e.preventDefault();

        const payload = {
            email,
            password 
        };
        
        dispatch(authRequest(payload));
        setEmail("");
        setPassword("");        
    };

    return (
        <Paper elevatio={1} style={{padding: theme.spacing(6, 6)}}>
            <form data-testid='login-form' className='formTag' onSubmit={handleSubmit}>
                <Grid container   direction="column">
                    <Grid item xs={12}>
                        <Typography variant="h3" component="h1" gutterBottom>
                            Войти
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        Новый пользователь? <Link data-testid='link-register' to='/registration'> Зарегистрируйтесь</Link>   
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            data-testid='input-name' 
                            onChange={e => setEmail(e.target.value)} 
                            value={email}
                            label='Имя пользователя' 
                            placeholder='Имя пользователя'
                            margin='dense'
                            required
                            fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            data-testid='input-pass'  
                            onChange={e => setPassword(e.target.value)} 
                            value={password} 
                            label='Пароль' 
                            placeholder='Пароль' 
                            margin='dense'
                            required
                            fullWidth />
                    </Grid>
                    <Grid item xs={12} container justify='flex-end' >
                        <Button data-testid='button-login'  color='secondary' variant="contained" type='submit' >Войти</Button>
                    </Grid>
                </Grid>              
            </form>
        </Paper>    
    )
}

export default LoginForm;