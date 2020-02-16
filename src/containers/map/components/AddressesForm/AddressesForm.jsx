import React, { useEffect } from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { getAddressesSelector, getAddresses, getRoute } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import formStyles from "../../../../css_modules/Form.module.css";
import { useForm, Controller } from "react-hook-form";

export function AddressesForm() {
  const dispatch = useDispatch();
  const { handleSubmit, watch, control } = useForm();

  const addressList = useSelector(state =>
    getAddressesSelector(state.routeReducer)
  );

  let filteredAddressList = useRef([]);
  const addressFrom = watch("addressFrom");
  const addressTo = watch("addressTo");

  if (addressList.length > 0) {
    filteredAddressList.current = addressList.filter(val => {
      return val !== addressFrom && val !== addressTo;
    });
  }

  const onSubmit = data => {
    const { addressFrom, addressTo } = data;

    const payload = {
      addressFrom,
      addressTo
    };

    dispatch(getRoute(payload));
  };

  useEffect(() => {
    dispatch(getAddresses());
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={formStyles.container}>
        <div className={formStyles.formRow}>
          <div className={formStyles.formCol}>
            <FormControl fullWidth>
              <InputLabel id="from-label-from">Откуда</InputLabel>
              <Controller
                as={Select}
                control={control}
                rules={{ required: true }}
                name="addressFrom"
                defaultValue=""
              >
                {filteredAddressList.current.map((address, i) => (
                  <MenuItem value={address} key={i}>
                    {address}
                  </MenuItem>
                ))}
              </Controller>
            </FormControl>
          </div>
        </div>
        <div className={formStyles.formRow}>
          <div className={formStyles.formCol}>
            <FormControl fullWidth>
              <InputLabel id="from-label-to">Куда</InputLabel>
              <Controller
                as={Select}
                rules={{ required: true }}
                control={control}
                name="addressTo"
                defaultValue=""
              >
                {filteredAddressList.current.map((address, i) => (
                  <MenuItem value={address} key={i}>
                    {address}
                  </MenuItem>
                ))}
              </Controller>
            </FormControl>
          </div>
        </div>
        <Button fullWidth data-event="add" type="submit">
          Вызвать Такси
        </Button>
      </div>
    </form>
  );
}
