import React from "react";
import { OPTIONS_MAP_ROUTE, OPTIONS_MAP_ROUTE_DASH_X, OPTIONS_MAP_ROUTE_DASH_Y, OPTIONS_MAP_ROUTE_DELAY, OPTIONS_MAP_ROUTE_TYPE, OPTIONS_MAP_ROUTE_TYPE_OPTIONS, OPTIONS_MAP_ROUTE_WEIGHT } from "../../../../localization/ptPt";
import { selectInput, sliderInput } from "../components/inputs";
import { getSectionStructure } from "../components/sectionStructure";

//  MUI
import Divider from "@mui/material/Divider";

export const getRouteOptions = (options, setOptions) => {
    let details = (
        <React.Fragment>
            {selectInput(OPTIONS_MAP_ROUTE_TYPE, "route", options, setOptions, false, 
                [
                    {value:"normal", name:OPTIONS_MAP_ROUTE_TYPE_OPTIONS[0]},
                    {value:"dynamic", name:OPTIONS_MAP_ROUTE_TYPE_OPTIONS[1]},
                ])
            }
            {
                options.route === "dynamic" &&
                <React.Fragment>
                    <Divider style={{marginBottom:'0.5rem', marginTop:'0.5rem'}}/>
                    {sliderInput(OPTIONS_MAP_ROUTE_DELAY, "route_delay", options, setOptions, {min: 0, max: 4000, step:100}, false)}
                    {sliderInput(OPTIONS_MAP_ROUTE_WEIGHT, "route_weight", options, setOptions, {min: 1, max: 50, step:1}, false)}
                    {sliderInput(OPTIONS_MAP_ROUTE_DASH_X, "route_dashX", options, setOptions, {min: 0, max: 100, step:1}, false)}
                    {sliderInput(OPTIONS_MAP_ROUTE_DASH_Y, "route_dashY", options, setOptions, {min: 0, max: 100, step:1}, false)}
                </React.Fragment>
            }
        </React.Fragment>
    )
    return getSectionStructure(OPTIONS_MAP_ROUTE, details, null);
}