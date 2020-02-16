import React from "react";
import Button from "@material-ui/core/Button";
import formStyles from "../../../../css_modules/Form.module.css";
import { clearRoute } from "../../store";
import { useDispatch } from "react-redux";

export function AddressesRouteMessage() {
  const dispatch = useDispatch();

  const handleClearRoute = e => {
    e.preventDefault();

    dispatch(clearRoute());
  };

  return (
    <div className={formStyles.container}>
      <span className={formStyles.info}>Заказ размещен</span>
      <span className={formStyles.info}>
        Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
      </span>
      <Button fullWidth onClick={handleClearRoute}>
        Сделать еще заказ
      </Button>
    </div>
  );
}
