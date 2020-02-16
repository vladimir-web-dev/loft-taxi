import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";

import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { registrationRequest, getRegistrationErrorSelector } from "../../../login/store";
import formStyles from "../../../../css_modules/Form.module.css";

export function RegistrationForm({ history }) {
  const errorMes = useSelector(state => getRegistrationErrorSelector(state.authReducer));
  const hasError = errorMes.length > 0;
  const emailError = hasError ? "Неверный адрес электронной почты" : "";

  const { control, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = data => {
    const payload = {
      data,
      history
    };

    dispatch(registrationRequest(payload));
  };

  return (
    <form
      data-testid="registration-form"
      className="formTag"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={formStyles.container}>
        <h1 className={formStyles.heading}>Регистрация</h1>
        <span className={formStyles.info}>
          Уже зарегистрированы?
          <Link
            className={formStyles.link}
            data-testid="link-login"
            to="/login"
          >
            Войти
          </Link>
        </span>
        <div className={formStyles.formRow}>
          <div className={formStyles.formCol}>
          <Controller
              as={TextField}
              control={control}
              defaultValue=""
              error={hasError}
              helperText={emailError}
              name="email"
              data-testid="input-email"
              label="Адрес электронной почты"
              placeholder="Адрес электронной почты"
              margin="dense"
              type="email"
              required
              fullWidth
            />
          </div>
        </div>
        <div className={formStyles.formRow}>
          <div className={formStyles.formCol}>
            <Controller
              as={TextField}
              control={control}
              defaultValue=""
              data-testid="input-fname"
              name="name"
              label="Имя"
              placeholder="Имя"
              margin="dense"
              required
              fullWidth
            />
          </div>
          <div className={formStyles.formCol}>
            <Controller
              as={TextField}
              control={control}
              defaultValue=""
              data-testid="input-lname"
              name="surname"
              label="Фамилия"
              placeholder="Фамилия"
              margin="dense"
              required
              fullWidth
            />
          </div>
        </div>
        <div className={formStyles.formRow}>
          <div className={formStyles.formCol}>
            <Controller
              as={TextField}
              control={control}
              defaultValue=""            
              data-testid="input-pass"         
              name="password"
              label="Пароль"
              placeholder="Пароль"
              margin="dense"
              required
              fullWidth
            />
          </div>
        </div>
        <Button
          className={formStyles.rightBtn}
          data-testid="button-login"
          color="secondary"
          variant="contained"
          type="submit"
        >
          Войти
        </Button>
      </div>
    </form>
  );
}
