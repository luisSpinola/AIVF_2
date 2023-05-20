import React from "react";
import { OPTIONS_AXES_INVERT } from "../../../../localization/ptPt";
import { selectInput, sliderInput } from "../components/inputs";
import { getSectionStructure } from "../components/sectionStructure";

//  MUI
import Divider from "@mui/material/Divider";

export const getRouteOptions = (options, setOptions) => {
    let details = (
        <React.Fragment>
            {selectInput("Tipo", "route", options, setOptions, false, 
                [
                    {value:"normal", name:"Normal"},
                    {value:"dynamic", name:"Dinâmica"},
                ])
            }

            {
                options.route === "dynamic" &&
                <React.Fragment>
                    <Divider style={{marginBottom:'0.5rem', marginTop:'0.5rem'}}/>
                    {sliderInput("Delay", "route_delay", options, setOptions, {min: 0, max: 4000, step:100}, false)}
                    {sliderInput("weight", "route_weight", options, setOptions, {min: 1, max: 50, step:1}, false)}
                    {sliderInput("dashX", "route_dashX", options, setOptions, {min: 0, max: 100, step:1}, false)}
                    {sliderInput("dashY", "route_dashY", options, setOptions, {min: 0, max: 100, step:1}, false)}
                </React.Fragment>
            }
            

        </React.Fragment>
    )
    return getSectionStructure("Rota", details, null);
}