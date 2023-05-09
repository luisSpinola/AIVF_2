import React, { useState, useEffect } from "react";
import { VALUE_COLOR, VALUE_HEIGHT, VALUE_INVERT_AXES, VALUE_MARGIN_BOTTTOM, VALUE_MARGIN_LEFT, VALUE_MARGIN_RIGHT, VALUE_MARGIN_TOP } from "../utils/defaults/defaults";
import { getGraphComponent, setPreferences } from "../utils/shared/functions";
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
        //  COLOR
        colors: VALUE_COLOR,
        colors_lock: true,
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