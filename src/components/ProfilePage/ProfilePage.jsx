import React from 'react';
import Header from '../Header';
import Grid from '@material-ui/core/Grid';
import { ProfileForm } from '../ProfileForm';
import './ProfilePage.css';

const ProfilePage = (props) => {
    return (
        <section className='section profile'>
            <Header  />
            <Grid container justify='center'>
                <Grid item>
                    <ProfileForm />
                </Grid>
            </Grid>
        </section>
    );
}

export default ProfilePage;