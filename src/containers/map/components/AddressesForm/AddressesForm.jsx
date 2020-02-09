import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import {
  getAddresses,
  getRoute,
  getRouteSelector,
  clearRoute,
  getAddressesSelector
} from "../../store";
import {
  getTokenSelector,
  getCardSelector,
  cardDetailsRequest
} from "../../../profile/store";

import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";

export function AddressesForm() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [addressFrom, setAddressFrom] = useState("");
  const [addressTo, setAddressTo] = useState("");

  const token = useSelector(state => getTokenSelector(state.authReducer));
  const card = useSelector(state => getCardSelector(state.profileReducer));
  const route = useSelector(state => getRouteSelector(state.routeReducer));
  const addressList = useSelector(state =>
    getAddressesSelector(state.routeReducer)
  );

  let filteredAddressList = useRef([]);

  if (addressList.length > 0) {
    filteredAddressList.current = addressList.filter(val => {
      return val !== addressFrom && val !== addressTo;
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    const payload = {
      addressFrom,
      addressTo
    };

    dispatch(getRoute(payload));
  };

  const handleClearRoute = e => {
    e.preventDefault();

    setAddressFrom("");
    setAddressTo("");

    dispatch(clearRoute());
  };

  useEffect(() => {
    dispatch(cardDetailsRequest(token));
  }, []);

  useEffect(() => {
    if (card.id) {
      dispatch(getAddresses());
    }
  }, [card]);

  return (
    <Paper
      style={{ padding: theme.spacing(6, 6), marginTop: theme.spacing(6) }}
    >
      {card.id ? (
        <>
          {route.length > 0 ? (
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h3" component="h1" gutterBottom>
                  Заказ размещен
                </Typography>
              </Grid>
              <Grid item xs={12}>
                Ваше такси уже едет к вам. Прибудет приблизительно через 10
                минут.
              </Grid>
              <Grid item xs={12}>
                <Button fullWidth onClick={handleClearRoute}>
                  Сделать еще заказ
                </Button>
              </Grid>
            </Grid>
          ) : (
            <form onSubmit={handleSubmit}>
              <Grid container>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="from-label-from">Откуда</InputLabel>
                    <Select
                      name="addressFrom"
                      labelId="from-label-from"
                      value={addressFrom}
                      onChange={e => setAddressFrom(e.target.value)}
                    >
                      {filteredAddressList.current.map((address, i) => (
                        <MenuItem value={address} key={i}>
                          {address}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="from-label-to">Куда</InputLabel>
                    <Select
                      name="addressTo"
                      labelId="from-label-to"
                      value={addressTo}
                      onChange={e => setAddressTo(e.target.value)}
                    >
                      {filteredAddressList.current.map((address, i) => (
                        <MenuItem value={address} key={i}>
                          {address}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Button fullWidth data-event="add" type="submit">
                    Вызвать Такси
                  </Button>
                </Grid>
              </Grid>
            </form>
          )}
        </>
      ) : (
        <Grid container>
          <Grid item xs={12}>
            <Button
              component={Link}
              to="/profile"
              color="secondary"
              variant="contained"
            >
              Профиль
            </Button>
          </Grid>
        </Grid>
      )}
    </Paper>
  );
}
