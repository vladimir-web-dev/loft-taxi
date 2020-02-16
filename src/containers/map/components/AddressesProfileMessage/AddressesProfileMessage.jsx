import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import formStyles from "../../../../css_modules/Form.module.css";

export function AddressesProfileMessage() {
  return (
    <div className={formStyles.container}>
      <span className={formStyles.info}>
        Заполните форму оплаты
      </span>
      <Button
        fullWidth
        component={Link}
        to="/profile"
        color="secondary"
        variant="contained"
      >
        Профиль
      </Button>
    </div>
  );
}
