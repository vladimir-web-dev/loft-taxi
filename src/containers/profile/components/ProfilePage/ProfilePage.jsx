import React from "react";
import { Header } from "../../../general/Header";
import Grid from "@material-ui/core/Grid";
import { ProfileForm } from "../ProfileForm";
import "./ProfilePage.css";

export function ProfilePage() {
  return (
    <section className="section profile">
      <Header />
      <Grid container justify="center">
        <Grid item>
          <ProfileForm />
        </Grid>
      </Grid>
    </section>
  );
}
