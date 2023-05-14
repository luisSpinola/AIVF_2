import React from "react";
import { OPTIONS_LEGEND_POS} from "../../../../localization/ptPt";
import { selectInput, sliderInput, switchInput, updateOptions } from "../components/inputs";
import { getSectionStructure } from "../components/sectionStructure";

//  MUI
import Divider from "@mui/material/Divider";

export const getLineOptions = (options, setOptions) => {
    let details = (
        <React.Fragment>
            {selectInput("Interpolation", "interpolation", options, setOptions, false, 
            [{value:"linear", name:"Linear"},
            {value:"monotome", name:"Monotome"},
            {value:"step", name:"Step"},
            {value:"Function", name:"Natural"},
            {value:"Natural", name:"Function"},
            {value:"basis", name:"Basis"}])}

            <Divider style={{marginBottom:'0.5rem', marginTop:'0.5rem'}}/>

            {sliderInput("Tamanho", "line_stroke", options, setOptions, {min: 1, max: 30, step:1}, false)}
            
            <Divider style={{marginBottom:'0.5rem', marginTop:'0.5rem'}}/>

            {switchInput("Pontos", "dots", options, setOptions, false)}
        </React.Fragment>
    )

    return getSectionStructure("Linha", details, null);
}