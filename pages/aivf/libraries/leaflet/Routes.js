import React, {useState, useEffect} from "react";

//  LEAFLET
import { TileLayer, MapContainer, Marker, Polyline} from "react-leaflet";
import { MAP_VECTOR_ARRAY } from "../../utils/default/defaults";
import { blueIcon, getBearingForOrientation, greenIcon, greyIcon, carDefault, carGreen, carYellow } from "./components/Icons";
import { StyledPop, StyledTooltip } from "./components/StyledComponents";
import AntPath from "./components/AntPath";

//  MUI
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Switch from "@mui/material/Switch";

//
import * as _ from 'lodash';
import { CustomMarker } from "./components/CustomMarker";

export default function Routes({data, options, globalColors}) {
    const [pathsFilter, setPathsFilter] = useState(null);
    const [forceRouteUpdate, setForceRouteUpdate] = useState(false)
    const [pathSelected, setPathSelected] = useState(null);
    const [currentIds, setCurrentIds] = useState([]);

    useEffect(() => {
        if(!forceRouteUpdate) {
            setForceRouteUpdate(true);
            setTimeout(() => {
                setForceRouteUpdate(false);
            }, 50)
        }
    }, [options.colors_lock, options.colors, options.route_delay, options.route_weight, options.route_dashX, options.route_dashY,pathSelected])

    useEffect(() => {
        if(data.routes){
            let new_currentIds = _.cloneDeep(currentIds);
            for(let i=0; i<data.routes[data.header.routes[0]].length; i++){
                let found = false;
                for(let j=0; j<currentIds.length; j++){
                    if(data.routes[data.header.routes[0]][i].id === currentIds[j].id){
                        found = true;
                    }
                }
                if(!found){
                    new_currentIds.push({
                        id:data.routes[data.header.routes[0]][i].id,
                        active: true
                    })
                }
            }

            //TODO remove

            setCurrentIds(new_currentIds);
        }
    }, [data]);


    const getPlot = (colors) => {
        let margin = {top:options.margin_top, right:options.margin_right, left:options.margin_left, bottom:options.margin_bottom};
        return (
            <div style={{height:options.height, paddingTop:margin.top, paddingBottom:margin.bottom, paddingLeft:margin.left, paddingRight:margin.right}}>
                <MapContainer style={{height: "100%", minHeight: "100%", maxHeight:'100%'}} center={[data.header.view_port.latitude, data.header.view_port.longitude]} zoom={data.header.view_port.zoom + 1} scrollWheelZoom={true}>
                    <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url={MAP_VECTOR_ARRAY[options.map_leaf]}/>
                    
                    {getVehicles("vehicle_green",carGreen)}
                    {getVehicles("vehicle_gray",carDefault)}
                    {getVehicles("vehicle_yellow",carYellow)}
                    {getIcons("icon_gray",greyIcon)}
                    {getIcons("icon_blue",blueIcon)}
                    {getIcons("icon_green",greenIcon)}
                    {getRoutes(colors)}
                </MapContainer>
            </div>
        )
    }

    const checkIdActive = (id) => {
        for(let i=0; i<currentIds.length; i++){
            if(currentIds[i].id === id){
                return currentIds[i].active;
            }
        }
        return false;
    }

    const changeIds = (id) => {
        let new_currentIds = _.cloneDeep(currentIds);
        for(let i=0; i<new_currentIds.length; i++){
            if(new_currentIds[i].id === id){
                new_currentIds[i].active = !new_currentIds[i].active;
            }
        }
        setCurrentIds(new_currentIds);
    }

    const getIds = () => {
        return <React.Fragment>
            {currentIds.map((elem) => {
                return <div key={elem.id}>
                    {elem.id} <Switch onChange={() => changeIds(elem.id)} checked={elem.active} size="small"/>
                </div>
            })}
        </React.Fragment>
    }

    const getIcons = (type, icon) => {
        return <React.Fragment>
            {data[type] && data[type].map((elem,index) => {
                return <React.Fragment key={index}>
                    {checkIdActive(elem.id) &&
                        <Marker key={"type" + index} position={elem.coords} icon={icon}>
                            <StyledPop>
                                {elem.info}
                            </StyledPop>
                            {options.permanent_tooltips && (options.permanent_tooltips_order || options.permanent_tooltips_info) && <StyledTooltip interactive={true} permanent>
                                {options.permanent_tooltips_order && <div>
                                    <strong>{elem.id}</strong> - <strong>{elem.order}</strong>
                                </div>}
                                {options.permanent_tooltips_info && elem.info}
                            </StyledTooltip>}
                        </Marker>
                    }
                </React.Fragment>
            
            })}
        </React.Fragment>
    }

    const getVehicles = (type, icon) => {
        return <React.Fragment>
            {data[type] && data[type].map((elem,index) => {
                let rotationAngle = getBearingForOrientation(elem, "2d");
                if(elem.coordsF !== undefined && elem.coordsF[1] !== undefined && elem.coordsF[0] !== undefined && !(elem.coordsF[0] !== elem.coordsF[0]) && !(elem.coordsF[1] !== elem.coordsF[1]))
                return <React.Fragment key={index}>
                    {checkIdActive(elem.id) &&
                        <CustomMarker key={index} position={elem.coordsF} icon={icon} rotationAngle={rotationAngle} rotationOrigin={"center"}>
                            <StyledPop>
                                {elem.info}
                            </StyledPop>
                            {(type !== "vehicle_gray" || (type === "vehicle_gray" && !options.permanent_tooltips_cars_no_ghost))&&<React.Fragment>
                                    {options.permanent_tooltips && options.permanent_tooltips_cars && <StyledTooltip interactive={true} permanent>
                                        {elem.info}
                                    </StyledTooltip>}
                                </React.Fragment>
                            }
                        </CustomMarker>
                    }
                </React.Fragment>
            
            })}
        </React.Fragment>
    }

    const handlePathSelected = (id) => {
        if(pathSelected !== id)
            setPathSelected(id);
        else
            setPathSelected(null);
    }

    const getRoutes = (colors) => {
        let polyline_componets = [];
        if(data.header.routes && !forceRouteUpdate){
            for(let i=0; i<data.header.routes.length; i++){
                for(let j=0; j<data.routes[data.header.routes[i]].length; j++){
                        let ant_options = { "delay": options.route_delay, "dashArray": [options.route_dashX,options.route_dashY], "paused": false, "reverse": false, "hardwareAccelerated": true }
                        if(checkIdActive(data.routes[data.header.routes[i]][j].id)){
                            let custom_weight = options.route_weight;
                            let custom_key = j + " " + i;
                            let custom_color = colors[i];
                            if(pathSelected !== null && pathSelected === custom_key){
                                custom_weight += 5;
                                custom_color = colors[data.header.routes.length];
                            }
                            if(options.route === "dynamic" ){
                                
                                polyline_componets.push(
                                    <AntPath key={custom_key}
                                    eventHandlers={{
                                        click: (e) => {
                                            handlePathSelected(custom_key);
                                        }
                                    }}
                                     positions={data.routes[data.header.routes[i]][j].path} options={{...ant_options, "weight": custom_weight, "color": custom_color, "pulseColor": custom_color}}>
                                        {data.routes[data.header.routes[i]][j].info && <StyledTooltip sticky>
                                            {data.routes[data.header.routes[i]][j].info}
                                        </StyledTooltip>}
                                    </AntPath>
                                )
                            } else if(options.route === "normal") {
                                polyline_componets.push(
                                    <Polyline key={custom_key} eventHandlers={{
                                        click: (e) => {
                                            handlePathSelected(custom_key);
                                        }
                                    }}
                                    positions={data.routes[data.header.routes[i]][j].path} pathOptions={{ color: custom_color }}>
                                        {data.routes[data.header.routes[i]][j].info && <StyledTooltip sticky>
                                            {data.routes[data.header.routes[i]][j].info}
                                        </StyledTooltip>}
                                    </Polyline>
                                )
                            }
                        }
                }
            }
        }
        return <React.Fragment>
            {polyline_componets}
        </React.Fragment>
    }

    const getLabel = (colors) => {
        let result =  [];
        let icons = ["#4798D0","#3ABC30","#8B8B8B"];
        let icons_type = ["icon_blue","icon_green","icon_gray"];

        for(let i=0; i<icons.length; i++){
            if(data[icons_type[i]]){
                result.push(
                    <div key={i+icons[i]} style={{display:'flex'}}>
                        <div style={{width:'0.8rem', height:'0.6rem', 
                            backgroundColor: icons[i]}}>
                        </div>
                        <div style={{marginTop:'-.25rem', marginLeft:'0.2rem', fontSize:'0.8rem'}}>
                            {data.header[icons_type[i]]}
                        </div>
                    </div>
                );
            }
        }

        for(let i=0; i<data.header.routes.length; i++){
            result.push(
                <div key={i+colors[i]} style={{display:'flex'}}>
                    <div style={{width:'0.8rem', height:'0.6rem', 
                        backgroundColor: colors[i]}}>
                    </div>
                    <div style={{marginTop:'-.25rem', marginLeft:'0.2rem', fontSize:'0.8rem'}}>
                        {data.header.routes[i]}
                    </div>
                </div>
            );
        }
        
        return <React.Fragment>
            {result}
        </React.Fragment>
    }

    const getPanel = () => {
        return <div style={{fontSize:'0.9rem', right: '0px', boxShadow: 'rgb(0 0 0 / 16%) 0px 1px 4px', top: '0px', margin: '24px', zIndex:999, position:'absolute', borderRadius:'5px', overflow:'hidden overlay', backgroundColor: 'rgba(255, 255, 255, 0.6)'}}>
            
            <div style={{margin:'.2rem'}}>

            
            <Accordion TransitionProps={{ unmountOnExit: true }} disableGutters 
                sx={{ marginBottom:'.2rem', borderRadius: '4px', backgroundColor: 'rgba(255, 255, 255, 0.85)', '&:before': {display: 'none'} }}>
                <AccordionSummary sx={{fontSize:'0.9rem'}} expandIcon={<ExpandMoreIcon/>}>
                    Legenda
                </AccordionSummary>
                <AccordionDetails>
                    {getLabel(colors)}
                </AccordionDetails>
            </Accordion>

            <Accordion TransitionProps={{ unmountOnExit: true }} disableGutters 
                sx={{ marginBottom:'.2rem', borderRadius: '4px', backgroundColor: 'rgba(255, 255, 255, 0.85)', '&:before': {display: 'none'} }}>
                <AccordionSummary sx={{fontSize:'0.9rem'}} expandIcon={<ExpandMoreIcon/>}>
                    {data.header.state}
                </AccordionSummary>
                <AccordionDetails>
                    {getIds()}
                </AccordionDetails>
            </Accordion>

            <Accordion TransitionProps={{ unmountOnExit: true }} disableGutters 
                sx={{ marginBottom:'.2rem', borderRadius: '4px', backgroundColor: 'rgba(255, 255, 255, 0.85)', '&:before': {display: 'none'} }}>
                <AccordionSummary sx={{fontSize:'0.9rem'}} expandIcon={<ExpandMoreIcon/>}>
                    Filtros
                </AccordionSummary>
                <AccordionDetails>
                    
                </AccordionDetails>
            </Accordion>

            </div>

        </div>
    }

    let colors; (options.colors_lock && globalColors) ? colors = globalColors : colors = options.colors;
    return(
        <div style={{width: '100%', position:'relative',marginBottom:'-1rem'}}>
            <div>
                {getPanel(colors)}
            </div>
            {getPlot(colors)}
        </div>
    )
}