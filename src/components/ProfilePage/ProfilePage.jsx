import React from 'react';
import Header from '../Header';
import Grid from '@material-ui/core/Grid';
import { ProfileForm } from '../ProfileForm'

const ProfilePage = (props) => {
    return (
        <section className='section'>
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