import React, { useEffect, useRef } from "react";
import Mapboxgl from "mapbox-gl";
import { useSelector } from "react-redux";
import { getRouteSelector } from "../../store";
import { drawRoute, removeRoute, initMap } from "../../../../helpers";

export function Map() {
  const mapRef = useRef({});
  const mapContainer = React.useRef(null);
  const route = useSelector(state => getRouteSelector(state.routeReducer));

  Mapboxgl.accessToken =
    "pk.eyJ1IjoidmxhZGltaXItaXJsIiwiYSI6ImNrNXRwMzZlYzBlZ3Yza2w3ZG5udnBicXUifQ.7YrhYxtKLEpfMM8cQDI3Dg";

  useEffect(() => {
    mapRef.current = initMap(mapContainer.current);

    return () => {
      mapRef.current.remove();
    };
  }, []);

  useEffect(() => {
    if (route.length > 0) {
      drawRoute(mapRef.current, route);
    } else {
      removeRoute(mapRef.current);
    }
  }, [route]);

  return <div ref={mapContainer} style={{ height: "100%" }}></div>;
}
