import Mapboxgl from "mapbox-gl";

export const initMap = container => {
  return new Mapboxgl.Map({
    container,
    style: "mapbox://styles/mapbox/streets-v9",
    center: [-6.261391086580829, 53.34022406028316],
    zoom: 13
  });
};

export const drawRoute = (map, coordinates) => {
  map.flyTo({
    center: coordinates[0],
    zoom: 15
  });

  map.addLayer({
    id: "route",
    type: "line",
    source: {
      type: "geojson",
      data: {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates
        }
      }
    },
    layout: {
      "line-join": "round",
      "line-cap": "round"
    },
    paint: {
      "line-color": "#ffc617",
      "line-width": 8
    }
  });
};

export const removeRoute = map => {
  if (map.getLayer("route")) {
    map.removeLayer("route");
  }

  if (map.getSource("route")) {
    map.removeSource("route");
  }
};
