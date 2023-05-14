import React, { useState, useEffect } from "react";
//  STRINGS
import { VALUE_DISPLAY_MODE, VALUE_HEIGHT, VALUE_MARGIN_BOTTTOM, VALUE_MARGIN_LEFT, VALUE_MARGIN_RIGHT, VALUE_MARGIN_TOP} from "../utils/default/defaults";
//  SHARED
import { getGraphComponent, setPreferences } from "../utils/shared/functions";
import { handleSidebarOptions } from "../utils/shared/options/options";
//  OPTION SECTIONS
import { getGeneralOptions } from "../utils/shared/options/sections/plot/general";
import { getMarginOptions } from "../utils/shared/options/sections/plot/margin";
import SaveButton from "../utils/shared/options/SaveButton";
//  PLOTS
import CustomTable from "../libraries/extra/CustomTable";

export default function TableComponent({id, data, optionsFlag, plotsInfo, identifier, previousOptions}) {
    const [options, setOptions] = useState({
        //  General
        height: VALUE_HEIGHT,
        //  Margin
        margin_top: 0,
        margin_bottom: VALUE_MARGIN_BOTTTOM,
        margin_left: 20,
        margin_right: 20,
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
        let sections = <React.Fragment>
            {getGeneralOptions(options, setOptions, {grouped: false, stacked: false})}
            {getMarginOptions(options, setOptions)}
            <SaveButton id={id} options={options} identifier={identifier} plotsInfo={plotsInfo}/>
        </React.Fragment>
        return handleSidebarOptions(optionsFlag, sections, plotsInfo);
    }
    
    return(
        <React.Fragment>
            {getGraphComponent(needAdapt, <CustomTable data={data} options={options}/>)}
            {optionsFlag[0] && sidebarOptions()}
        </React.Fragment>
    )
}