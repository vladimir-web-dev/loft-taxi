import React from 'react';
import Mapboxgl from 'mapbox-gl';

function Map () {
    const mapContainer  = React.useRef(null);
    Mapboxgl.accessToken = 'pk.eyJ1IjoidmxhZGltaXItaXJsIiwiYSI6ImNrNXRwMzZlYzBlZ3Yza2w3ZG5udnBicXUifQ.7YrhYxtKLEpfMM8cQDI3Dg';

    React.useEffect(() => {
        const map = new Mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v9',
            center: [-6.261391086580829, 53.34022406028316],
            zoom: 13
          });
          
        return () => {
            map.remove();
        }
      });

    return <div ref={mapContainer} style={{height: '100%'}}></div>
}

export default Map;