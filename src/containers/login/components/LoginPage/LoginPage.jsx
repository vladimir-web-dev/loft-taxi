import React from "react";
import { useSelector } from "react-redux";
import { LoginForm } from "../LoginForm";
import { getIsAuthenticatingSelector } from "../../store";
import { Logo } from "loft-taxi-mui-theme";
import containerStyles from  "../../../../css_modules/Container.module.css";


export function LoginPage({ history }) {
  const isAuthenticating = useSelector(state =>
    getIsAuthenticatingSelector(state.authReducer)
  );

  return (
    <section className={containerStyles.central}>
      <div className={containerStyles.content}>
        <div className={containerStyles.col}>
          <Logo className={containerStyles.logo}/>
        </div>
        <div className={containerStyles.col}>
          <LoginForm history={history} />
        </div>
      </div>
    </section>
  );
}