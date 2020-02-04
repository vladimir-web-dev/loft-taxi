import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Logo } from 'loft-taxi-mui-theme';
import { useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../modules/auth'
import Button from '@material-ui/core/Button';

function Header () {
    const theme = useTheme();
    const dispatch = useDispatch();

    const handleClick = e => {
        e.preventDefault();
        
        dispatch(logout());
    };

    return (
        <header className='header'>
            <Paper square  elevation={3} style={{padding: theme.spacing(1, 3)}}>
                <Grid container justify='space-between' alignItems='center'>
                    <Grid item container sm={6}>
                        <Logo />
                    </Grid>
                    <Grid item container sm={6} justify='flex-end'>
                        <Grid item>
                            <Button component={Link} to='/map'>Карта</Button>
                            {/* <Link ></Link> */}
                        </Grid>
                        <Grid item>
                            <Button component={Link} to='/profile'>Профиль</Button>
                            {/* <Link to='/profile'>Профиль</Link> */}
                        </Grid>
                        <Grid item>
                            <Button onClick={handleClick}>Выйти</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>            
        </header>
    );
}

export default Header;