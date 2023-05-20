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
import MapInterface from "../libraries/leaflet/MapInterface";
import { getMapOptions } from "../utils/shared/options/sections/map/mapa";

export default function LocationComponent({id, data, optionsFlag, plotsInfo, identifier, previousOptions, colors}) {
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
        sticky_tooltips: false
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
            <SaveButton id={id} options={options} identifier={identifier} plotsInfo={plotsInfo}/>
        </React.Fragment>
        return handleSidebarOptions(optionsFlag, sections, plotsInfo);
    }
    
    return(
        <React.Fragment>
            {getGraphComponent(needAdapt, <MapInterface data={data} options={options} globalColors={colors}/>)}
            {optionsFlag[0] && sidebarOptions()}
        </React.Fragment>
    )
}