import React from "react";
import { OPTIONS_AXES_INVERT, OPTIONS_AXES_SCALE, OPTIONS_AXES_SCALE_0, OPTIONS_AXES_SCALE_1, OPTIONS_AXES_YTICK, OPTIONS_SECTION_AXES} from "../../../../localization/ptPt";
import { selectInput, sliderInput, switchInput } from "../components/inputs";
import { getSectionStructure } from "../components/sectionStructure";

//  MUI
import Divider from "@mui/material/Divider";

export const getAxesOptions = (options, setOptions, {invert}) => {
    let details = (
        <React.Fragment>
            {invert && <React.Fragment>
                {switchInput(OPTIONS_AXES_INVERT, "invert_axes", options, setOptions, false)}
                <Divider style={{marginBottom:'0.5rem', marginTop:'0.5rem'}}/>
            </React.Fragment>}
            {selectInput(OPTIONS_AXES_SCALE, "scale", options, setOptions, false, [{value:0, name:OPTIONS_AXES_SCALE_0},{value:1, name:OPTIONS_AXES_SCALE_1}])}
            <Divider style={{marginBottom:'0.5rem', marginTop:'0.5rem'}}/>
            {sliderInput(OPTIONS_AXES_YTICK, "yTick", options, setOptions, {min: 0, max: 20, step:1}, false)}
        </React.Fragment>
    )
    return getSectionStructure(OPTIONS_SECTION_AXES, details, null);
}