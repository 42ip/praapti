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
import classes from './Map.module.css'



export default function OLMap() {
    let props = {
        features : []
    }
    const [key,setKey] = useState("AsQblU0RiCtFTCZqCy95v6Ax4YOunThhOO8RIsowcDuVQjBLJqZ37dYAwo4VRe_Z");
    const [map,setMap] = useState();
    const [featuresLayer,setFeatureLayer] = useState();
    const [selectedCoord,setSelectedCoord] = useState();
    
    const mapElement = useRef();
    const mapRef = useRef();
    mapRef.current = map;

    useEffect(()=>{
        const initFeatureLayer = new TileLayer({
            visible : false,
           
            source : new BingMaps({
                key : key,
                imagerySet : 'AerialWithLabelsOnDemand',
                maxZoom : 19
            })
        })

        const initMap = new Map({
            target : mapElement.current,
            layers : [
               initFeatureLayer 
            ],
            view : new View({
                center: [-6655.5402445057125, 6709968.258934638],
                zoom: 13,
            })
        })

        setMap(initMap);
        setFeatureLayer(initFeatureLayer);

    })

    useEffect( () => {

        if (props.features.length) { // may be null on first render
    
          // set features to map
          featuresLayer.setSource(
            new BingMaps({
                key : key,
                imagerySet : 'AerialWithLabelsOnDemand',
                maxZoom : 19,
                features: props.features // make sure features is an array
            })
          )
    
          // fit map to feature extent (with 100px of padding)
          map.getView().fit(featuresLayer.getSource().getExtent(), {
            padding: [100,100,100,100]
          })
    
        }
    
      },[props.features])


       // map click handler
    const handleMapClick = (event) => {

        // get clicked coordinate using mapRef to access current React state inside OpenLayers callback
        //  https://stackoverflow.com/a/60643670
        const clickedCoord = mapRef.current.getCoordinateFromPixel(event.pixel);

        // transform coord to EPSG 4326 standard Lat Long
        const transormedCoord = transform(clickedCoord, 'EPSG:3857', 'EPSG:4326')

        // set React state
        setSelectedCoord( transormedCoord )

        console.log(transormedCoord)
    
    }

    return (
            <div ref={mapElement} className={`map-container ${classes.mapdiv}`}></div>
    )
}
