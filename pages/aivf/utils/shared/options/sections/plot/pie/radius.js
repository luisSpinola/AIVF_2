import React from "react";
import { OPTIONS_SECTION_LABELLIST} from "../../../../../localization/ptPt";
import { sliderInput, switchInput, updateOptions } from "../../components/inputs";
import { getSectionStructure } from "../../components/sectionStructure";

//  MUI
import Divider from "@mui/material/Divider";

export const getRadiusOptions = (options, setOptions) => {
    let details = (
        <React.Fragment>
            {switchInput("Automático", "radius_auto", options, setOptions, false)}
            {!options.radius_auto &&
                <React.Fragment>
                    <Divider style={{marginBottom:'0.5rem', marginTop:'0.5rem'}}/>
                    {sliderInput("Inner", "radius_inner", options, setOptions, {min: 0, max: 100, step:1}, false)}
                    {sliderInput("Outer", "radius_outer", options, setOptions, {min: 0, max: 200, step:1}, false)}
                    {sliderInput("Spacing", "radius_spacing", options, setOptions, {min: 0, max: 50, step:1}, false)}
                </React.Fragment>
            }
            
        </React.Fragment>
    )

    return getSectionStructure("Raio", details, null);
}