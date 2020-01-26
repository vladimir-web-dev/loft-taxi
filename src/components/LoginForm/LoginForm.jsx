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


function LoginForm (props) {
    const { login } = React.useContext(AuthContext);
    const [ name, setName ] = React.useState("");
    const [ password, setPassword ] = React.useState("");
    const theme = useTheme();

    return (
        <Paper elevatio={1} style={{padding: theme.spacing(6, 6)}}>
            <form data-testid='login-form' className='formTag' onSubmit={() => login(name, password)}>
                <Grid container   direction="column">
                    <Grid item xs={12}>
                        <Typography variant="h3" component="h1" gutterBottom>
                            Войти
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        Новый пользователь? <Link data-testid='link-register' underline='none' onClick={() => props.changePage('REGISTRATION')}> Зарегистрируйтесь</Link>   
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            data-testid='input-name' 
                            onChange={e => setName(e.target.value)} 
                            value={name}
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

LoginForm.propTypes = {
    changePage: PropTypes.func.isRequired
}

export default LoginForm;