import React, {useState, useEffect} from "react";

//  LEAFLET
import { TileLayer, MapContainer, Marker } from "react-leaflet";
import { MAP_VECTOR_ARRAY } from "../../utils/default/defaults";
import { blueIcon } from "./components/Icons";
import { StyledPop, StyledTooltip } from "./components/StyledComponents";
import AntPath from "./components/AntPath";

//  MUI
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function Routes({data, options, globalColors}) {

    const [pathsFilter, setPathsFilter] = useState(null);
    const [forceRouteUpdate, setForceRouteUpdate] = useState(false)


    useEffect(() => {
        if(!forceRouteUpdate) {
            setForceRouteUpdate(true);
            setTimeout(() => {
                setForceRouteUpdate(false);
            }, 200)
        }
    }, [options.colors_lock, options.colors[0], options.colors[1], options.route_delay, options.route_weight, options.route_dashX, options.route_dashY])


    const getPlot = () => {
        let colors; (options.colors_lock && globalColors) ? colors = globalColors : colors = options.colors;

        let margin = {top:options.margin_top, right:options.margin_right, left:options.margin_left, bottom:options.margin_bottom};
        return (
            <div style={{height:options.height, paddingTop:margin.top, paddingBottom:margin.bottom, paddingLeft:margin.left, paddingRight:margin.right}}>
                <MapContainer style={{height: "100%", minHeight: "100%", maxHeight:'100%'}} center={[data.header.view_port.latitude, data.header.view_port.longitude]} zoom={data.header.view_port.zoom + 1} scrollWheelZoom={true}>
                    <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url={MAP_VECTOR_ARRAY[options.map_leaf]}/>
                    {getRoutes(colors)}
                </MapContainer>
            </div>
        )
    }

    const getRoutes = (colors) => {
        let polyline_componets = [];
        if(data.header.routes && !forceRouteUpdate){
            for(let i=0; i<data.header.routes.length; i++){
                for(let j=0; j<data.routes[data.header.routes[i]].length; j++){
                        let ant_options = { "delay": options.route_delay, "dashArray": [options.route_dashX,options.route_dashY], "weight": options.route_weight, "color": colors[i], "pulseColor": colors[i], "paused": false, "reverse": false, "hardwareAccelerated": true }
                        polyline_componets.push(
                            <AntPath key={j + " " + i} positions={data.routes[data.header.routes[i]][j].path} options={{...ant_options}}>
                                {data.routes[data.header.routes[i]][j].info && <StyledTooltip sticky>
                                    {data.routes[data.header.routes[i]][j].info}
                                </StyledTooltip>}
                            </AntPath>
                        )
                }
            }
        }
        return <React.Fragment>
            {polyline_componets}
        </React.Fragment>
    }

    const getPanel = () => {
        return <div style={{fontSize:'0.9rem', right: '0px', boxShadow: 'rgb(0 0 0 / 16%) 0px 1px 4px', backgroundColor: '#f4f6f9', top: '0px', margin: '24px', zIndex:999, position:'absolute', overflow:'hidden overlay'}}>
            <Accordion TransitionProps={{ unmountOnExit: true }} disableGutters 
                sx={{ borderRadius: '4px', backgroundColor: 'rgba(255, 255, 255, 0.85)', '&:before': {display: 'none'} }}>
                <AccordionSummary sx={{fontSize:'0.9rem'}} expandIcon={<ExpandMoreIcon/>}>
                    Legenda
                </AccordionSummary>
                <AccordionDetails>
                    asas
                </AccordionDetails>
            </Accordion>

            <Accordion TransitionProps={{ unmountOnExit: true }} disableGutters 
                sx={{ borderRadius: '4px', backgroundColor: 'rgba(255, 255, 255, 0.85)', '&:before': {display: 'none'} }}>
                <AccordionSummary sx={{fontSize:'0.9rem'}} expandIcon={<ExpandMoreIcon/>}>
                    {data.header.state}
                </AccordionSummary>
                <AccordionDetails>
                    asas
                </AccordionDetails>
            </Accordion>

            <Accordion TransitionProps={{ unmountOnExit: true }} disableGutters 
                sx={{ borderRadius: '4px', backgroundColor: 'rgba(255, 255, 255, 0.85)', '&:before': {display: 'none'} }}>
                <AccordionSummary sx={{fontSize:'0.9rem'}} expandIcon={<ExpandMoreIcon/>}>
                    Filtros
                </AccordionSummary>
                <AccordionDetails>
                    asas
                </AccordionDetails>
            </Accordion>
        </div>
    }

    return(
        <div style={{width: '100%', position:'relative',marginBottom:'-1rem'}}>
            <div>
                {getPanel()}
            </div>
            {getPlot()}
        </div>
    )
}