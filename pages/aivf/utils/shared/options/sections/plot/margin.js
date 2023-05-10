import React from "react";
import { OPTIONS_MARGIN_BOTTOM, OPTIONS_MARGIN_LEFT, OPTIONS_MARGIN_RIGHT, OPTIONS_MARGIN_TOP, OPTIONS_SECTION_MARGIN } from "../../../../localization/ptPt";
import { sliderInput } from "../components/inputs";
import { getSectionStructure } from "../components/sectionStructure";

export const getMarginOptions = (options, setOptions) => {
    let details = (
        <React.Fragment>
            {sliderInput(OPTIONS_MARGIN_TOP, "margin_top", options, setOptions, {min: -100, max: 100, step:1})}
            {sliderInput(OPTIONS_MARGIN_BOTTOM, "margin_bottom", options, setOptions, {min: -100, max: 100, step:1})}
            {sliderInput(OPTIONS_MARGIN_LEFT, "margin_left", options, setOptions, {min: -100, max: 100, step:1})}
            {sliderInput(OPTIONS_MARGIN_RIGHT, "margin_right", options, setOptions, {min: -100, max: 100, step:1})}
        </React.Fragment>
    )

    return getSectionStructure(OPTIONS_SECTION_MARGIN, details, null);
}