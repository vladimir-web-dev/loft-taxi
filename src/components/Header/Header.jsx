import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import AuthContext from '../../context/AuthContext';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Logo } from 'loft-taxi-mui-theme';
import { useTheme } from '@material-ui/core/styles';

function Header ({changePage}) {
    const { logout } = React.useContext(AuthContext);
    const theme = useTheme();

    return (
        <header className='header'>
            <Paper square  elevation={3} style={{padding: theme.spacing(1, 3)}}>
                <Grid container justify='space-between' alignItems='center'>
                    <Grid item container sm={6}>
                        <Logo />
                    </Grid>
                    <Grid item container sm={6} justify='flex-end'>
                        <Grid item>
                            <Button onClick={() => changePage('MAP')}>Карта</Button>
                        </Grid>
                        <Grid item>
                            <Button onClick={() => changePage('PROFILE')}>Профиль</Button>
                        </Grid>
                        <Grid item>
                            <Button onClick={logout}>Выйти</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>            
        </header>
    );
}

Header.propTypes = {
    changePage: PropTypes.func.isRequired
}

export default Header;