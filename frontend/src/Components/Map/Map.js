import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

export default function App() {
    const [viewport, setViewport] = useState({
      latitude: 45.4211,
      longitude: -75.6903,
      width: "100vw",
      height: "85vh",
      zoom: 10
    });
    const [selectedPark, setSelectedPark] = useState(null);
  
    useEffect(() => {
    //   const listener = e => {
    //     if (e.key === "Escape") {
    //       setSelectedPark(null);
    //     }
    //   };
    //   window.addEventListener("keydown", listener);
  
    //   return () => {
    //     window.removeEventListener("keydown", listener);
    //   };
    }, []);
  
    return (
      <div>
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={`pk.eyJ1IjoidGlydGgwIiwiYSI6ImNrbjB0NHY1aTA5bTkycG56NXZhdXl4MGkifQ.1ywfUyHehaszWb-Q0tlb3g`}
          mapStyle="mapbox://styles/mapbox/satellite-v9"
          onViewportChange={viewport => {
            setViewport(viewport);
          }}
        > 
        </ReactMapGL>
      </div>
    );
  }