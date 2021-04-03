import React, { useState,useEffect } from 'react';
import MapGL from '@urbica/react-map-gl';
import Draw from '@urbica/react-map-gl-draw';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import classes from './Map.module.css'
import axios from 'axios';

function Map({viewport,data,setData}) {
    //   const navControlStyle= {
    //     right: 10,
    //     top: 10
    //   };
      
    const addFields = ()=>{
      console.log(data);
      console.log(localStorage.getItem("user"));
      const id = localStorage.getItem("_id");
      axios({
        method : 'post',
        data : {...data,id},
        withCredentials : true,
        url : "http://localhost:8080/addFeatures"
      })
      .then((res)=>{
        console.log(res);
      })
      .catch(err=>{
        console.log(err);
      })
    }  
    return (
        <>
        <MapGL
           {...viewport}
          style={{ width: '100%', height: '85vh' }}
          mapStyle='mapbox://styles/mapbox/satellite-v9'
          accessToken={"pk.eyJ1IjoidGlydGgwIiwiYSI6ImNrbjB0NHY1aTA5bTkycG56NXZhdXl4MGkifQ.1ywfUyHehaszWb-Q0tlb3g"}
          
        >
          <Draw data={data} onChange={(data) => setData(data)}/> 
          <button onClick={addFields} className={classes.addBtn}>Add them fields</button>
        </MapGL>
        
      </>
    );
  }


  export default function MapUtil(){
    /*----------------STATE-----------------------*/
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
    /*----------------STATE-----------------------*/
    function getLocation(){
      if (navigator.geolocation) {
        return navigator.geolocation.getCurrentPosition(getPosition);
      }
    }
    function getPosition(position) {
      console.log(position);
      const newViewPort = {
        latitude : position.coords.latitude,
        longitude : position.coords.longitude,
        width: "100vw",
        height: "85vh",
        zoom: 10
      }
      setViewport(newViewPort);
    }
    useEffect(()=>{
        console.log(getLocation());
        axios({
          method : 'post',
          data : {
            id : localStorage.getItem("_id")
          },
          withCredentials : true,
          url : "http://localhost:8080/getFeatures"
        })
        .then(res=>{
          let {features,type} = res.data[0];
          features = features.map((elem,id)=>{
            return {
              properties : {},
              ...elem
            }
          })
          const newData = {
            type : type,
            features : features
          }
          setData(newData);
          
        })
        .catch(err=>{
          console.log(err);
        })
        // eslint-disable-next-line
    },[])
    return(
      <Map viewport={viewport} data={data} setData={setData}/>
    );
  }