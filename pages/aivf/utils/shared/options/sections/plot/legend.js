import React from "react";
import { OPTIONS_LABELLIST_POS_BOTTOM, OPTIONS_LABELLIST_POS_CENTER, OPTIONS_LABELLIST_POS_TOP, OPTIONS_LEGEND_ALIGN, OPTIONS_LEGEND_POS, OPTIONS_SECTION_LEGEND} from "../../../../localization/ptPt";
import { selectInput, sliderInput, switchInput, updateOptions } from "../components/inputs";
import { getSectionStructure } from "../components/sectionStructure";

//  MUI
import Switch from "@mui/material/Switch";

export const getLegendOptions = (options, setOptions) => {
    let switchComponent = <Switch size="small" checked={options.legend} onChange={(e) => updateOptions("legend", e.target.checked, options, setOptions)} onClick={(event) => event.stopPropagation()} onFocus={(event) => event.stopPropagation()}/>

    let disable = false;
    if(!options.legend) disable = true;

    let details = (
        <React.Fragment>
            {selectInput(OPTIONS_LEGEND_POS, "legend_pos", options, setOptions, disable, 
            [{value:"top", name:OPTIONS_LABELLIST_POS_TOP},
            {value:"bottom", name:OPTIONS_LABELLIST_POS_BOTTOM},
            {value:"center", name:OPTIONS_LABELLIST_POS_CENTER}])}

            {selectInput(OPTIONS_LEGEND_ALIGN, "legend_align", options, setOptions, disable, 
            [{value:"center", name:"Centro"},
            {value:"left", name:"Esquerda"},
            {value:"right", name:"Direita"}])}
        </React.Fragment>
    )

    return getSectionStructure(OPTIONS_SECTION_LEGEND, details, switchComponent);
}