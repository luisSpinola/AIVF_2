import React, { useState, useEffect } from "react";
//  STRINGS
import { VALUE_COLOR, VALUE_HEIGHT} from "../utils/default/defaults";
//  SHARED
import { getGraphComponent, setPreferences } from "../utils/shared/functions";
import { handleSidebarOptions } from "../utils/shared/options/options";
//  OPTION SECTIONS
import { getGeneralOptions } from "../utils/shared/options/sections/plot/general";
import { getMarginOptions } from "../utils/shared/options/sections/plot/margin";
import SaveButton from "../utils/shared/options/SaveButton";
//  PLOTS
import Gauge from "../libraries/extra/Gauge";
import ColorSelector from "../utils/shared/options/sections/plot/ColorSelector";
import { getGaugeOptions } from "../utils/shared/options/sections/plot/gauge/gauge";

export default function GaugeComponent({id, data, optionsFlag, plotsInfo, identifier, previousOptions, colors}) {
    const [options, setOptions] = useState({
        //  General
        height: 220,
        width: 300,
        //  Margin
        margin_top: 0,
        margin_bottom: 0,
        margin_left: 0,
        margin_right: 0,
        colors: VALUE_COLOR,
        colors_lock: true,
        info: true,
        info_top: false,
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
            {getGaugeOptions(options, setOptions)}
            {getMarginOptions(options, setOptions)}
            <ColorSelector option="colors" options={options} setOptions={setOptions} size={1} opacity={false} section={true} colors={colors}/>
            <SaveButton id={id} options={options} identifier={identifier} plotsInfo={plotsInfo}/>
        </React.Fragment>
        return handleSidebarOptions(optionsFlag, sections, plotsInfo);
    }
    
    return(
        <React.Fragment>
            {getGraphComponent(needAdapt, <Gauge data={data} options={options} globalColors={colors}/>)}
            {optionsFlag[0] && sidebarOptions()}
        </React.Fragment>
    )
}