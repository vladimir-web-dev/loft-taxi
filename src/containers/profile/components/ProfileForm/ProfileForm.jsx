import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import Button from "@material-ui/core/Button";
import {
  getCardSelector,
  getTokenSelector,
  cardUpdateRequest,
  cardDetailsRequest
} from "../../../profile/store";
import { useForm, Controller } from "react-hook-form";
import formStyles from "../../../../css_modules/Form.module.css";
import classNames from 'classnames';

export function ProfileForm() {
  const { setValue, handleSubmit, control, errors, setError, clearError } = useForm();
  const hasCardNumberError = errors.cardNumber !== undefined;
  const cardNumberError = errors.cardNumber && errors.cardNumber.message;
  const hasCVCNumberError = errors.cvc !== undefined;
  const cvcNumberError = errors.cvc && errors.cvc.message;
  const dispatch = useDispatch();
  const token = useSelector(state => getTokenSelector(state.authReducer));
  const card = useSelector(state => getCardSelector(state.profileReducer));
  

  if (Object.keys(card).length > 0) {
    setValue("expiryDate", card.expiryDate);
    setValue("cardName", card.cardName);
    setValue("cvc", card.cvc);
    setValue("cardNumber", card.cardNumber);
  }

  const onSubmit = data => {
    if(!validateCardNumber(data.cardNumber) || !validateCVCNumber(data.cvc))
      return;

    const payload = {
      ...data,
      token
    };

    dispatch(cardUpdateRequest(payload));
  };

  const validateCVCNumber = value => {    

    if(value.length !== 3) {
      setError("cvc","notMatch","В cvc номере должно быть 3 цифры");
      return false;
    }   

    clearError("cvc");
    return true;
      
  }

  const validateCardNumber = value => {    
    const reg = new RegExp('^[0-9]+$');

    if(value.length !== 16) {
      setError("cardNumber","notMatch","В номере карты 16 цифр");
      return false;
    }   
    
    if(!reg.test(value)) {
      setError("cardNumber","notMatch","В номере карты должны быть только цифры");
      return false;
    }

    clearError("cardNumber");
    return true;
      
  }

  useEffect(() => {
    dispatch(cardDetailsRequest(token));
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={classNames([formStyles.container, formStyles.formCentered])}>
        <h1 className={formStyles.heading}>Профиль</h1>
        <span className={formStyles.info}>Способ оплаты</span>
        <div className={formStyles.formRow}>
          <div className={formStyles.formCol}>
            <div className={formStyles.card}>
              <div className={formStyles.formRow}>
                <Controller                 
                  as={TextField}
                  control={control}
                  data-testid="input-card-number"
                  name="cardNumber"
                  label="Номер карты"
                  placeholder="0000 0000 0000 0000"
                  error={hasCardNumberError}
                  helperText={cardNumberError}
                  defaultValue=""
                  margin="dense"
                  required
                  fullWidth
                />
              </div>
              <div className={formStyles.formRow}>
                <MuiPickersUtilsProvider utils={MomentUtils} >
                  <Controller
                  style={{marginTop: '20px', marginBottom:'4px'}}
                  fullWidth
                    as={DatePicker}
                    name="expiryDate"
                    control={control}
                  />
                </MuiPickersUtilsProvider>
              </div>
            </div>
          </div>
          <div className={formStyles.formCol}>
            <div className={formStyles.card}>
              <div className={formStyles.formRow}>
                <Controller
                  as={TextField}
                  control={control}
                  data-testid="input-card-number"
                  name="cardName"
                  label="Имя владельца"
                  placeholder="USER NAME"
                  defaultValue=""
                  margin="dense"
                  required
                  fullWidth
                />
              </div>
              <div className={formStyles.formRow}>
                <Controller
                  as={TextField}
                  control={control}
                  data-testid="input-card-number"
                  name="cvc"
                  label="CVC "
                  placeholder="CVC"
                  error={hasCVCNumberError}
                  helperText={cvcNumberError}
                  defaultValue=""
                  margin="dense"
                  required
                  fullWidth
                />
              </div>
            </div>
          </div>
        </div>
        <Button
          data-testid="button-login"
          color="secondary"
          variant="contained"
          type="submit"
        >
          Сохранить
        </Button>
      </div>
    </form>
  );
}
