import React from "react";

import { OPTIONS_LINE, OPTIONS_LINE_BASIS, OPTIONS_LINE_DOTS, OPTIONS_LINE_FUNCTION, OPTIONS_LINE_LINEAR, OPTIONS_LINE_MONOTOME, OPTIONS_LINE_NATURAL, OPTIONS_LINE_STEP, OPTIONS_LINE_STROKE} from "../../../../localization/ptPt";
import { selectInput, sliderInput, switchInput } from "../components/inputs";
import { getSectionStructure } from "../components/sectionStructure";

//  MUI
import Divider from "@mui/material/Divider";

export const getLineOptions = (options, setOptions) => {
    let details = (
        <React.Fragment>
            {selectInput("Interpolation", "interpolation", options, setOptions, false, 
            [{value:"linear", name:OPTIONS_LINE_LINEAR},
            {value:"monotome", name:OPTIONS_LINE_MONOTOME},
            {value:"step", name:OPTIONS_LINE_STEP},
            {value:"Function", name:OPTIONS_LINE_FUNCTION},
            {value:"Natural", name:OPTIONS_LINE_NATURAL},
            {value:"basis", name:OPTIONS_LINE_BASIS}])}

            <Divider style={{marginBottom:'0.5rem', marginTop:'0.5rem'}}/>

            {sliderInput(OPTIONS_LINE_STROKE, "line_stroke", options, setOptions, {min: 0, max: 30, step:1}, false)}
            
            <Divider style={{marginBottom:'0.5rem', marginTop:'0.5rem'}}/>

            {switchInput(OPTIONS_LINE_DOTS, "dots", options, setOptions, false)}
        </React.Fragment>
    )

    return getSectionStructure(OPTIONS_LINE, details, null);
}