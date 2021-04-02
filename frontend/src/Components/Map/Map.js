import React,{useState,useRef,useEffect} from 'react'
import 'ol/ol.css';
import Map from 'ol/Map'
import View from 'ol/View'
import BingMaps from 'ol/source/BingMaps';
import TileLayer from 'ol/layer/Tile'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import XYZ from 'ol/source/XYZ'
import {transform} from 'ol/proj'
import {toStringXY} from 'ol/coordinate';



export default function Map() {
    const [key,setKey] = useState("AsQblU0RiCtFTCZqCy95v6Ax4YOunThhOO8RIsowcDuVQjBLJqZ37dYAwo4VRe_Z");
    const [map,setMap] = useState();
    const [featureLayer,setFeatureLayer] = useState();
    const [select,setSelect] = useState();
    
    const mapElement = useRef();
    const mapRef = useRef();
    mapRef.current = map;

    useEffect(()=>{
        const initFeatureLayer = new TileLayer({
            visible : true,
            preload : Infinity,
            source : new BingMaps({
                key : key,
                imagerySet : 'AerialWithLabelsOnDemand',
                maxZoom : 19
            })
        })
    })

    return (
        <div>
            <body>
            <div id="map" class="map"></div>
            <select id="layer-select">
                <option value="Aerial">Aerial</option>
                <option value="AerialWithLabelsOnDemand" selected>Aerial with labels</option>
                <option value="RoadOnDemand">Road</option>
                <option value="CanvasDark">Road dark</option>
                <option value="OrdnanceSurvey">Ordnance Survey</option>
            </select>
            <script src="main.js"></script>
        </body>

        </div>
    )
}
