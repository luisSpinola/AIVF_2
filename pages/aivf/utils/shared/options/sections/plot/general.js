import React from "react";
import { OPTIONS_GROUPED, OPTIONS_HEIGHT, OPTIONS_SECTION_GENERAL } from "../../../../localization/ptPt";
import { sliderInput, switchInput } from "../components/inputs";
import { getSectionStructure } from "../components/sectionStructure";

//  MUI
import Divider from "@mui/material/Divider";

export const getGeneralOptions = (options, setOptions, {grouped}) => {
    let details = (
        <React.Fragment>
            {sliderInput(OPTIONS_HEIGHT, "height", options, setOptions, {min: 100, max: 1500, step:50}, false)}

            {grouped && <React.Fragment>
                <Divider style={{marginBottom:'0.5rem', marginTop:'0.5rem'}}/>
                {switchInput(OPTIONS_GROUPED, "grouped", options, setOptions, false)}
            </React.Fragment>}
            
        </React.Fragment>
    )
    return getSectionStructure(OPTIONS_SECTION_GENERAL, details, null);
}