import React, { useState } from 'react';
import MapGL,{NavigationControl} from '@urbica/react-map-gl';
import Draw from '@urbica/react-map-gl-draw';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';


export default function Map() {
    const [viewport, setViewport] = useState({
      latitude: 45.4211,
      longitude: -75.6903,
      width: "100vw",
      height: "85vh",
      zoom: 10
    });
    const [data, setData] = useState({
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              coordinates: [-122.41411987304815, 37.792209769935084],
              type: 'Point'
            }
          }
        ]
      });
      const navControlStyle= {
        right: 10,
        top: 10
      };
  
    return (
        <>
        <MapGL
           {...viewport}
          style={{ width: '100%', height: '85vh' }}
          mapStyle='mapbox://styles/mapbox/satellite-v9'
          accessToken={"pk.eyJ1IjoidGlydGgwIiwiYSI6ImNrbjB0NHY1aTA5bTkycG56NXZhdXl4MGkifQ.1ywfUyHehaszWb-Q0tlb3g"}
          onViewportChange={setViewport}
        >
          
          <Draw data={data} onChange={(data) => setData(data)} />
          
        </MapGL>
      </>
    );
  }