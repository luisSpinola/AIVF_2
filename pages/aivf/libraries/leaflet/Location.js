import React, { useState, useEffect } from "react";
import { CustomTooltipForDiv } from "../../utils/shared/functions";
import styled from "styled-components";

//  LEAFLET
import L from 'leaflet';
import { TileLayer, MapContainer, Marker, Popup } from "react-leaflet";
import { MAP_VECTOR_ARRAY } from "../../utils/default/defaults";
import { greenIcon, redIcon } from "./Icons";

const StyledPop = styled(Popup)`
  
  .leaflet-popup-content-wrapper {
    border-radius: 5 !important;
    background-color: rgba(255, 255, 255, 0.8) !important;
    fontSize:0.85rem !important;
    padding:0.05rem !important;
    boxShadow: 0 5px 5px rgba(129, 124, 124, 0.7) !important;
  }

  .leaflet-popup-tip-container {
    visibility: hidden;
  }
`;

export default function Location({data, options, globalColors}) {

    const getPlot = () => {
        let margin = {top:options.margin_top, right:options.margin_right, left:options.margin_left, bottom:options.margin_bottom};
        return (
            <div style={{height:options.height, paddingTop:margin.top, paddingBottom:margin.bottom, paddingLeft:margin.left, paddingRight:margin.right}}>
                <MapContainer style={{height: "100%", minHeight: "100%", maxHeight:'100%'}} center={[data.header.view_port.latitude, data.header.view_port.longitude]} zoom={data.header.view_port.zoom + 1} scrollWheelZoom={true}>
                    <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url={MAP_VECTOR_ARRAY[options.map_leaf]}/>
                    {data.data.map((elem, index) => {
                        return <Marker key={index} position={elem[data.header.coords]} icon={greenIcon}>
                            <StyledPop>
                                <div>
                                    {elem[data.header.info]}
                                </div>
                            </StyledPop>
                        </Marker>
                    })}
                </MapContainer>;
            </div>
        )
    }

    return(
        
        <div style={{width: '100%', position:'relative'}}>
            {getPlot()}
        </div>
    )
}