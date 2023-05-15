import React, { useState, useEffect } from "react";
//  STRINGS
import { VALUE_COLOR } from "../utils/default/defaults";
//  SHARED
import { getGraphComponent, setPreferences } from "../utils/shared/functions";
import { handleSidebarOptions } from "../utils/shared/options/options";
//  OPTION SECTIONS
import { getGeneralOptions } from "../utils/shared/options/sections/plot/general";
import { getMarginOptions } from "../utils/shared/options/sections/plot/margin";
import SaveButton from "../utils/shared/options/SaveButton";
//  PLOTS
import LocationInterface from "../libraries/leaflet/LocationInterface";
import { getMapOptions } from "../utils/shared/options/sections/map/mapa";
import ColorSelector from "../utils/shared/options/sections/plot/ColorSelector";

export default function PathComponent({id, data, optionsFlag, plotsInfo, identifier, previousOptions, colors}) {
    const [options, setOptions] = useState({
        //  General
        height: 350,
        //  Margin
        margin_top: 0,
        margin_bottom: 10,
        margin_left: 10,
        margin_right: 10,

        colors: VALUE_COLOR,
        colors_lock: true,

        map_leaf: 0,
        sticky_tooltips: false,
        
        //  Route
        route: "dynamic", //normal, dynamic
        route_delay: 2000,// 0->4000
        route_weight: 5,// 1->100
        route_dashX: 20,// 1->100
        route_dashY: 40,// 1->100
    })

    const[needAdapt, setNeedAdapt] = useState(false);

    useEffect(() => {
        if(previousOptions !== null) {
            setOptions(previousOptions);
        } else {
            setPreferences(id, data.header, options, setOptions);
        }
    },[])


    const sidebarOptions = () => {
        let sections = <React.Fragment>
            {getGeneralOptions(options, setOptions, {grouped: false, stacked: false, width: false})}
            {getMapOptions(options, setOptions, {stickyTooltip: true})}
            {getMarginOptions(options, setOptions)}
            <ColorSelector option="colors" options={options} setOptions={setOptions} size={data.data.length} opacity={false} section={true} colors={colors}/>
            <SaveButton id={id} options={options} identifier={identifier} plotsInfo={plotsInfo}/>
        </React.Fragment>
        return handleSidebarOptions(optionsFlag, sections, plotsInfo);
    }
    
    return(
        <React.Fragment>
            {getGraphComponent(needAdapt, <LocationInterface data={data} options={options} globalColors={colors}/>)}
            {optionsFlag[0] && sidebarOptions()}
        </React.Fragment>
    )
}