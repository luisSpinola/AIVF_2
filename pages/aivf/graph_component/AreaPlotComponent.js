import React, { useState, useEffect } from "react";
//  STRINGS
import { VALUE_COLOR, VALUE_DISPLAY_MODE, VALUE_GRID, VALUE_GRID_HORIZONTAL, VALUE_GRID_OPACITY, VALUE_GRID_STROKE, VALUE_GRID_VERTICAL, VALUE_HEIGHT, VALUE_INVERT_AXES, VALUE_LABELLIST, VALUE_LABELLIST_ANGLE, VALUE_LABELLIST_OFFSET, VALUE_LABELLIST_POSITION, VALUE_LEGEND, VALUE_LEGEND_ALIGN, VALUE_LEGEND_POS, VALUE_MARGIN_BOTTTOM, VALUE_MARGIN_LEFT, VALUE_MARGIN_RIGHT, VALUE_MARGIN_TOP, VALUE_Y_SCALE, VALUE_Y_TICK } from "../utils/default/defaults";
//  SHARED
import { getGraphComponent, setPreferences } from "../utils/shared/functions";
import { handleSidebarOptions } from "../utils/shared/options/options";
//  OPTION SECTIONS
import { getGeneralOptions } from "../utils/shared/options/sections/plot/general";
import { getGridOptions } from "../utils/shared/options/sections/plot/grid";
import { getMarginOptions } from "../utils/shared/options/sections/plot/margin";
import { getAxesOptions } from "../utils/shared/options/sections/plot/axes";
import { getLabelListOptions } from "../utils/shared/options/sections/plot/labelList";
import { getLegendOptions } from "../utils/shared/options/sections/plot/legend";
import { getLineOptions } from "../utils/shared/options/sections/plot/line";
import ColorSelector from "../utils/shared/options/sections/plot/ColorSelector";
import SaveButton from "../utils/shared/options/SaveButton";
//  PLOTS
import AreaPlot from "../libraries/recharts/AreaPlot";

export default function AreaPlotComponent({id, data, optionsFlag, plotsInfo, identifier, previousOptions, multi, colors}) {
    const [options, setOptions] = useState({
        //  General
        height: VALUE_HEIGHT,
        invert_axes: VALUE_INVERT_AXES,
        interpolation: 'linear',
        dots: true,
        line_stroke: 2,
        //  Margin
        margin_top: VALUE_MARGIN_TOP,
        margin_bottom: VALUE_MARGIN_BOTTTOM,
        margin_left: VALUE_MARGIN_LEFT,
        margin_right: VALUE_MARGIN_RIGHT,
        //  Label List
        labelList: VALUE_LABELLIST,
        labelList_pos: VALUE_LABELLIST_POSITION,
        labelList_offset: VALUE_LABELLIST_OFFSET,
        labelList_angle: VALUE_LABELLIST_ANGLE,
        //  Legend
        legend: VALUE_LEGEND,
        legend_pos: VALUE_LEGEND_POS,
        legend_align: VALUE_LEGEND_ALIGN,
        //  Grid
        grid: VALUE_GRID,
        grid_horizontal: VALUE_GRID_HORIZONTAL,
        grid_vertical: VALUE_GRID_VERTICAL,
        grid_opacity: VALUE_GRID_OPACITY,
        grid_stroke: VALUE_GRID_STROKE,
        //  Y
        yTick: VALUE_Y_TICK,
        scale: VALUE_Y_SCALE,
        //  COLOR
        colors: VALUE_COLOR,
        colors_opacity: 60,
        colors_lock: true,
        //  Multi
        grouped: true,
        stacked: false,

        invert_axes: VALUE_INVERT_AXES,
        display_mode: VALUE_DISPLAY_MODE, // default, currency, percentage
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
        let colorSize = data.header.value.length;
        if(data.header.line){ colorSize++}

        let sections = <React.Fragment>
            {multi ? getGeneralOptions(options, setOptions, {grouped: true, stacked: true}) : getGeneralOptions(options, setOptions, {grouped: false, stacked: false})}
            {getAxesOptions(options, setOptions, {invert:true})}
            {getLineOptions(options, setOptions)}
            {getLabelListOptions(options, setOptions)}
            {getLegendOptions(options, setOptions)}
            {getGridOptions(options, setOptions)}
            {getMarginOptions(options, setOptions)}
            <ColorSelector option="colors" options={options} setOptions={setOptions} size={colorSize} opacity={true} section={true} colors={colors}/>
            <SaveButton id={id} options={options} identifier={identifier} plotsInfo={plotsInfo}/>
        </React.Fragment>
        return handleSidebarOptions(optionsFlag, sections, plotsInfo);
    }
    
    return(
        <React.Fragment>
            {getGraphComponent(needAdapt, <AreaPlot data={data} options={options} globalColors={colors}/>)}
            {optionsFlag[0] && sidebarOptions()}
        </React.Fragment>
    )
}