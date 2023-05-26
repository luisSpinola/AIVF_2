import React from "react";

import { OPTIONS_LABELLIST_ANG, OPTIONS_LABELLIST_OFFSET, OPTIONS_LABELLIST_POS, OPTIONS_LABELLIST_POS_BOTTOM, OPTIONS_LABELLIST_POS_CENTER, OPTIONS_LABELLIST_POS_TOP, OPTIONS_SECTION_LABELLIST} from "../../../../localization/ptPt";
import { selectInput, sliderInput, updateOptions } from "../components/inputs";
import { getSectionStructure } from "../components/sectionStructure";

//  MUI
import Switch from "@mui/material/Switch";
import Divider from "@mui/material/Divider";

export const getLabelListOptions = (options, setOptions) => {
    let switchComponent = <Switch size="small" checked={options.labelList} onChange={(e) => updateOptions("labelList", e.target.checked, options, setOptions)} onClick={(event) => event.stopPropagation()} onFocus={(event) => event.stopPropagation()}/>

    let disable = false;
    if(!options.labelList) disable = true;

    let details = (
        <React.Fragment>
            {selectInput(OPTIONS_LABELLIST_POS, "labelList_pos", options, setOptions, disable, 
                [{value:"top", name:OPTIONS_LABELLIST_POS_TOP},
                {value:"bottom", name:OPTIONS_LABELLIST_POS_BOTTOM},
                {value:"center", name:OPTIONS_LABELLIST_POS_CENTER}])}
            <Divider style={{marginBottom:'0.5rem', marginTop:'0.5rem'}}/>
            {sliderInput(OPTIONS_LABELLIST_OFFSET, "labelList_offset", options, setOptions, {min: -50, max: 50, step:1}, disable)}
            {sliderInput(OPTIONS_LABELLIST_ANG, "labelList_angle", options, setOptions, {min: -90, max: 90, step:1}, disable)}
        </React.Fragment>
    )

    return getSectionStructure(OPTIONS_SECTION_LABELLIST, details, switchComponent);
}