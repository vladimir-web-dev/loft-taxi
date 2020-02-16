import React from "react";
import { RegistrationForm } from "../RegistrationForm";
import { Logo } from "loft-taxi-mui-theme";
import containerStyles from  "../../../../css_modules/Container.module.css";

export const RegistrationPage = ({ history }) => {
  return (
    <section className={containerStyles.central}>
      <div className={containerStyles.content}>
        <div className={containerStyles.col}>
          <Logo />
        </div>
        <div className={containerStyles.col}>
          <RegistrationForm history={history} />
          </div>
      </div>
    </section>
    
  );
};
