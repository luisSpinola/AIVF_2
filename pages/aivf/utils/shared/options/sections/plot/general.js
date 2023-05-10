import React from "react";
import { OPTIONS_HEIGHT, OPTIONS_SECTION_GENERAL } from "../../../../localization/ptPt";
import { sliderInput } from "../components/inputs";
import { getSectionStructure } from "../components/sectionStructure";

export const getGeneralOptions = (options, setOptions) => {
    let details = (
        <React.Fragment>
            {sliderInput(OPTIONS_HEIGHT, "height", options, setOptions, {min: 100, max: 1500, step:50})}
        </React.Fragment>
    )

    return getSectionStructure(OPTIONS_SECTION_GENERAL, details, null);
}