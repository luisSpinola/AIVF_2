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
import ColorSelector from "../utils/shared/options/sections/plot/ColorSelector";
import LocationInterface from "../libraries/leaflet/LocationInterface";
import { getMapOptions } from "../utils/shared/options/sections/map/mapa";

export default function LocationComponent({id, data, optionsFlag, plotsInfo, identifier, previousOptions, colors}) {
    const [options, setOptions] = useState({
        //  General
        height: 250,
        //  Margin
        margin_top: 0,
        margin_bottom: 0,
        margin_left: 0,
        margin_right: 0,
        colors: VALUE_COLOR,
        colors_lock: true,
        map_leaf: 0
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
            {getMapOptions(options, setOptions)}
            {getMarginOptions(options, setOptions)}
            <ColorSelector option="colors" options={options} setOptions={setOptions} size={1} opacity={false} section={true} colors={colors}/>
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