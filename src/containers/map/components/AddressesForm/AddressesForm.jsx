import React, { useEffect } from "react";
// import FormControl from "@material-ui/core/FormControl";
 import Select from "react-select";
// import InputLabel from "@material-ui/core/InputLabel";
// import MenuItem from "@material-ui/core/MenuItem";
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
          <Controller
                as={Select}
                control={control}
                rules={{ required: true }}
                name="addressFrom"
                defaultValue=""
                isClearable
                options={filteredAddressList.current.map(val => {return {value: val, label: val}})}
              />
          </div>
        </div>
        <div className={formStyles.formRow}>
          <div className={formStyles.formCol}>
          <Controller
                as={Select}
                rules={{ required: true }}
                control={control}
                name="addressTo"
                defaultValue=""
                isClearable={true}
                options={filteredAddressList.current.map(val => {return {value: val, label: val}})}
                />
          </div>
        </div>
        <Button fullWidth data-event="add" type="submit">
          Вызвать Такси
        </Button>
      </div>
    </form>
  );
}
