import React, { useState, useEffect } from "react";
//  STRINGS
import { VALUE_COLOR, VALUE_DISPLAY_MODE, VALUE_HEIGHT, VALUE_INVERT_AXES, VALUE_LABELLIST, VALUE_LABELLIST_ANGLE, VALUE_LABELLIST_OFFSET, VALUE_LABELLIST_POSITION, VALUE_LEGEND, VALUE_LEGEND_ALIGN, VALUE_LEGEND_POS, VALUE_MARGIN_BOTTTOM, VALUE_MARGIN_LEFT, VALUE_MARGIN_RIGHT, VALUE_MARGIN_TOP } from "../utils/default/defaults";
//  SHARED
import { getGraphComponent, setPreferences } from "../utils/shared/functions";
import { handleSidebarOptions } from "../utils/shared/options/options";
//  OPTION SECTIONS
import { getGeneralOptions } from "../utils/shared/options/sections/plot/general";
import { getMarginOptions } from "../utils/shared/options/sections/plot/margin";
import { getLegendOptions } from "../utils/shared/options/sections/plot/legend";
import ColorSelector from "../utils/shared/options/sections/plot/ColorSelector";
//  PLOTS
import PiePlot from "../libraries/recharts/PiePlot";
import { getPieLabelListOptions } from "../utils/shared/options/sections/plot/pie/pieLabelList";
import { getRadiusOptions } from "../utils/shared/options/sections/plot/pie/radius";
import SaveButton from "../utils/shared/options/SaveButton";

export default function PiePlotComponent({id, data, optionsFlag, plotsInfo, identifier, previousOptions}) {
    const [options, setOptions] = useState({
        //  General
        height: VALUE_HEIGHT,
        //  Radius
        radius_auto: false,
        radius_inner: 55,
        radius_outer: 100,
        radius_spacing: 0,
        //  Margin
        margin_top: 0,
        margin_bottom: VALUE_MARGIN_BOTTTOM,
        margin_left: VALUE_MARGIN_LEFT,
        margin_right: VALUE_MARGIN_RIGHT,
        //  Label List
        labelList: VALUE_LABELLIST,
        labelList_mode: 1,
        labelList_line: false,
        labelList_percent: false,
        labelList_color: ["#000000"],
        //  Legend
        legend: VALUE_LEGEND,
        legend_pos: VALUE_LEGEND_POS,
        legend_align: 'center',
        legend_direction: 'horizontal',
        //  COLOR
        colors: VALUE_COLOR,
        colors_opacity: 100,
        colors_lock: true,

        display_mode: VALUE_DISPLAY_MODE, // default, currency, percentage
    })

    const[needAdapt, setNeedAdapt] = useState(false);

    useEffect(() => {
        setPreferences(id, data.header, options, setOptions);
        if(previousOptions !== null) setOptions(previousOptions);
    },[])

    const sidebarOptions = () => {
        let sections = <React.Fragment>
            {getGeneralOptions(options, setOptions, {grouped: false, stacked: false})}
            {getPieLabelListOptions(options, setOptions)}
            {getLegendOptions(options, setOptions)}
            {getMarginOptions(options, setOptions)}
            {getRadiusOptions(options, setOptions)}
            <ColorSelector option="colors" options={options} setOptions={setOptions} size={data.data.length} opacity={false} section={true}/>
            <SaveButton id={id} options={options} identifier={identifier} plotsInfo={plotsInfo}/>
        </React.Fragment>
        return handleSidebarOptions(optionsFlag, sections, plotsInfo);
    }
    
    return(
        <React.Fragment>
            {getGraphComponent(needAdapt, <PiePlot data={data} options={options}/>)}
            {optionsFlag[0] && sidebarOptions()}
        </React.Fragment>
    )
}