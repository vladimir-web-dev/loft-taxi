import React from "react";
import { Link } from "react-router-dom";
import formStyles from "../../../../css_modules/Form.module.css";
import Button from "@material-ui/core/Button";
import classNames from 'classnames';

export function ProfileFormSaved() {
  return (
    <div className={classNames([formStyles.container, formStyles.formCentered])}>
      <h1 className={formStyles.heading}>Профиль</h1>
      <span className={formStyles.info}>Способ оплаты</span>
      <span className={formStyles.info}>
        Платёжные данные обновлены. Теперь вы можете заказывать такси.
      </span>
      <Button component={Link} to="/map" color="secondary" variant="contained">
        Перейти на карту
      </Button>
    </div>
  );
}
