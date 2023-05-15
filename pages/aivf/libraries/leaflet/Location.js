import React from "react";
import styled from "styled-components";

//  LEAFLET
import { TileLayer, MapContainer, Marker, Popup, Tooltip} from "react-leaflet";
import { MAP_VECTOR_ARRAY } from "../../utils/default/defaults";
import { blueIcon, greenIcon } from "./Icons";

const StyledPop = styled(Popup)`
  .leaflet-popup-content-wrapper {
    border-radius: 5 !important;
    background-color: rgba(255, 255, 255, 0.8) !important;
    fontSize:0.85rem !important;
    padding:0.001rem !important;
    boxShadow: 0 5px 5px rgba(129, 124, 124, 0.7) !important;
  }

  .leaflet-popup-tip-container {
    visibility: hidden;
  }
`;

const StyledTooltip = styled(Tooltip)`
    padding:2px !important;
    font-size:0.7rem;
    border-radius: 5 !important;
    background-color: rgba(255, 255, 255, 0.7) !important;
    border-left-color: rgba(0, 0, 0, 0) !important;
    border-right-color: rgba(0, 0, 0, 0) !important;
`;

export default function Location({data, options, globalColors}) {

    const getPlot = () => {
        let margin = {top:options.margin_top, right:options.margin_right, left:options.margin_left, bottom:options.margin_bottom};
        return (
            <div style={{height:options.height, paddingTop:margin.top, paddingBottom:margin.bottom, paddingLeft:margin.left, paddingRight:margin.right}}>
                <MapContainer style={{height: "100%", minHeight: "100%", maxHeight:'100%'}} center={[data.header.view_port.latitude, data.header.view_port.longitude]} zoom={data.header.view_port.zoom + 1} scrollWheelZoom={true}>
                    <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url={MAP_VECTOR_ARRAY[options.map_leaf]}/>
                    {data.data.map((elem, index) => {
                        return <Marker key={index} position={elem[data.header.coords]} icon={blueIcon}>
                            <StyledPop>
                                {elem[data.header.info]}
                            </StyledPop>
                            {options.sticky_tooltips && <StyledTooltip permanent interactive={true}>
                                {elem[data.header.info]}
                            </StyledTooltip>}
                        </Marker>
                    })}
                </MapContainer>;
            </div>
        )
    }

    return(
        <div style={{width: '100%', position:'relative',marginBottom:'-1rem'}}>
            {getPlot()}
        </div>
    )
}