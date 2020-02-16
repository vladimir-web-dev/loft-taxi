import React, { useEffect } from "react";
import { Header } from "../../../general/Header";
import { Map } from "../Map";
import { AddressesForm } from "../AddressesForm";
import { AddressesRouteMessage } from "../AddressesRouteMessage";
import { AddressesProfileMessage } from "../AddressesProfileMessage";
import { getRouteSelector } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import containerStyles from "../../../../css_modules/Container.module.css";
import { LoadingModal } from "../../../general/LoadingModal";
import {
  getTokenSelector,
  getCardSelector,
  cardDetailsRequest,
  getIsFetchingSelector
} from "../../../profile/store";

function AddressFormSwitch({ showForm, ...otherProps }) {
  switch (showForm) {
    case "address":
      return <AddressesForm {...otherProps} />;
    case "newRoute":
      return <AddressesRouteMessage {...otherProps} />;
    default:
      return <AddressesProfileMessage {...otherProps} />;
  }
}

export function MapPage() {
  let form = "";
  const isFetching = useSelector(state =>
    getIsFetchingSelector(state.profileReducer)
  );
  const card = useSelector(state => getCardSelector(state.profileReducer));
  const route = useSelector(state => getRouteSelector(state.routeReducer));
  const token = useSelector(state => getTokenSelector(state.authReducer));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cardDetailsRequest(token));
  }, []);

  if (card.id) form = "address";

  if (route.length) form = "newRoute";

  return (
    <>
    <section className={containerStyles.vertical}>
      <Header />
      <div className={containerStyles.mapContainer}>
        <Map />
        <div className={containerStyles.formContainerA}>
          <div className={containerStyles.mapForm}>
            <AddressFormSwitch showForm={form} />
          </div>
        </div>
      </div>
    </section>
    <LoadingModal showModal={isFetching}/>
    </>
  );
}
