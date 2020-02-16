import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import { authRequest, getAuthErrorSelector } from "../../../login/store";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import formStyles from "../../../../css_modules/Form.module.css";

export function LoginForm({ history }) {
  const errorMes = useSelector(state =>
    getAuthErrorSelector(state.authReducer)
  );
  const { control, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const hasError = errorMes.length > 0;
  const loginError = hasError ? "Неверный логин" : "";
  const passwordError = hasError ? "Неправильный пароль" : "";

  const onSubmit = data => {
    const payload = {
      data,
      history
    };
    
    dispatch(authRequest(payload));
  };

  return (
    <form
      data-testid="login-form"
      className="formTag"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={formStyles.container}>
        <h1 className={formStyles.heading}>Войти</h1>
        <span className={formStyles.info}>
          Новый пользователь?
          <Link
            className={formStyles.link}
            data-testid="link-register"
            to="/registration"
          >
            Зарегистрируйтесь
          </Link>
        </span>
        <div className={formStyles.formRow}>
          <div className={formStyles.formCol}>
            <Controller
              as={TextField}
              control={control}
              data-testid="input-name"
              name="email"
              type="email"
              label="Имя пользователя"
              placeholder="Имя пользователя"
              defaultValue=""
              error={hasError}
              helperText={loginError}
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
              data-testid="input-pass"
              name="password"
              label="Пароль"
              placeholder="Пароль"
              defaultValue=""
              error={hasError}
              helperText={passwordError}
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
