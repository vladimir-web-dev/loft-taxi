import React, { useEffect } from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "react-select";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import { getAddressesSelector, getAddresses, getRoute } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import formStyles from "../../../../css_modules/Form.module.css";
import { useForm, Controller } from "react-hook-form";
export function AddressesForm() {
  const dispatch = useDispatch();
  const { handleSubmit, watch, control } = useForm();
  const addressList = useSelector(state =>
    getAddressesSelector(state.routeReducer)
  );
  let filteredAddressList = [];
  const addressFrom = watch("addressFrom");
  const addressTo = watch("addressTo");
  if (addressList.length > 0) {
    filteredAddressList = addressList.filter(val => {
      return val !== addressFrom.value && val !== addressTo.value;
    });
  }
  const onSubmit = data => {
    const {
      addressFrom: { value: from },
      addressTo: { value: to }
    } = data;
    const payload = {
      addressFrom: from,
      addressTo: to
    };
    dispatch(getRoute(payload));
  };
  useEffect(() => {
    dispatch(getAddresses());
  }, []);
  const options = filteredAddressList.length
    ? filteredAddressList.map(el => ({ value: el, label: el }))
    : [];
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
                options={options}
                onChange={([selected]) => {
                  return { value: selected };
                }}
              ></Controller>
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
                options={options}
                name="addressTo"
                defaultValue=""
                onChange={([selected]) => {
                  return { value: selected };
                }}
              ></Controller>
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