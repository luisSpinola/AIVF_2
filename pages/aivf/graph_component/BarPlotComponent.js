import React, { useState, useEffect } from "react";
//  STRINGS
import { VALUE_COLOR, VALUE_GRID, VALUE_GRID_HORIZONTAL, VALUE_GRID_OPACITY, VALUE_GRID_STROKE, VALUE_GRID_VERTICAL, VALUE_HEIGHT, VALUE_INVERT_AXES, VALUE_LABELLIST, VALUE_LABELLIST_ANGLE, VALUE_LABELLIST_OFFSET, VALUE_LABELLIST_POSITION, VALUE_LEGEND, VALUE_LEGEND_ALIGN, VALUE_LEGEND_POS, VALUE_MARGIN_BOTTTOM, VALUE_MARGIN_LEFT, VALUE_MARGIN_RIGHT, VALUE_MARGIN_TOP } from "../utils/default/defaults";
//  SHARED
import { getGraphComponent, setPreferences } from "../utils/shared/functions";
//  PLOTS
import { BarPlot } from "../libraries/recharts/BarPlot";

export default function BarPlotComponent({id, data}) {
    const [options, setOptions] = useState({
        //  General
        height: VALUE_HEIGHT,
        invert_axes: VALUE_INVERT_AXES,
        //  Margin
        margin_top: VALUE_MARGIN_TOP,
        margin_bottom: VALUE_MARGIN_BOTTTOM,
        margin_left: VALUE_MARGIN_LEFT,
        margin_right: VALUE_MARGIN_RIGHT,
        //  Label List
        labelList: VALUE_LABELLIST,
        labelList_position: VALUE_LABELLIST_POSITION,
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
        yTick: 4,
        simplify: false,
        scale: 0,
        //  COLOR
        colors: VALUE_COLOR,
        colors_lock: true,

        invert_axes: false,
        display_mode: "default", // default, currency, percentage
    })

    const[needAdapt, setNeedAdapt] = useState(false);

    useEffect(() => {
        setPreferences(id, data.header, options, setOptions);
    },[])

    return(
        <React.Fragment>
           {getGraphComponent(needAdapt, <BarPlot data={data} options={options}/>)}
        </React.Fragment>
    )
}