import React from "react";

import { OPTIONS_GRID_HORIZONTAL, OPTIONS_GRID_OPACITY, OPTIONS_GRID_STROKE, OPTIONS_GRID_VERTICAL, OPTIONS_SECTION_GRID } from "../../../../localization/ptPt";
import { sliderInput, switchInput, updateOptions } from "../components/inputs";
import { getSectionStructure } from "../components/sectionStructure";

//  MUI
import Switch from "@mui/material/Switch";
import Divider from "@mui/material/Divider";

export const getGridOptions = (options, setOptions) => {
    let switchComponent = <Switch size="small" checked={options.grid} onChange={(e) => updateOptions("grid", e.target.checked, options, setOptions)} onClick={(event) => event.stopPropagation()} onFocus={(event) => event.stopPropagation()}/>

    let disable = false;
    if(!options.grid) disable = true;

    let details = (
        <React.Fragment>
            {switchInput(OPTIONS_GRID_HORIZONTAL, "grid_horizontal", options, setOptions, disable)}
            {switchInput(OPTIONS_GRID_VERTICAL, "grid_vertical", options, setOptions, disable)}
            {switchInput(OPTIONS_GRID_STROKE, "grid_stroke", options, setOptions, disable)}
            <Divider style={{marginBottom:'0.5rem', marginTop:'0.5rem'}}/>
            {sliderInput(OPTIONS_GRID_OPACITY, "grid_opacity", options, setOptions, {min: 0, max: 100, step:1}, disable)}
        </React.Fragment>
    )
    return getSectionStructure(OPTIONS_SECTION_GRID, details, switchComponent);
}