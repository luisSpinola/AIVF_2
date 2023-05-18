import React from "react";
import { sliderInput, switchInput  } from "../../components/inputs";
import { getSectionStructure } from "../../components/sectionStructure";

//  MUI
import Divider from "@mui/material/Divider";

export const getGaugeOptions = (options, setOptions) => {
    let details = (
        <React.Fragment>
            {sliderInput("Altura", "height", options, setOptions, {min: 150, max: 280, step:10}, false)}
            {sliderInput("Largura", "width", options, setOptions, {min: 250, max: 400, step:10}, false)}
            <Divider style={{marginBottom:'0.5rem', marginTop:'0.5rem'}}/>
            {switchInput("Info", "info", options, setOptions, false)}
            {switchInput("Info no topo", "info_top", options, setOptions, false)}
        </React.Fragment>
    )

    return getSectionStructure("Gauge", details, null);
}