import React from "react";
import { OPTIONS_AXES_INVERT } from "../../../../localization/ptPt";
import { selectInput, switchInput } from "../components/inputs";
import { getSectionStructure } from "../components/sectionStructure";

//  MUI
import Divider from "@mui/material/Divider";

export const getMapOptions = (options, setOptions, {stickyTooltip}) => {
    let details = (
        <React.Fragment>
            {selectInput("Mapa", "map_leaf", options, setOptions, false, 
                [
                    {value:0, name:"Normal"},
                    {value:1, name:"Normal 2"},
                    {value:2, name:"Normal 3"},
                    {value:3, name:"Normal 4"},
                    {value:4, name:"Topologia"},
                    {value:5, name:"Topologia 2"},
                    {value:6, name:"Simples"},
                    {value:7, name:"Simples 2"},
                    {value:8, name:"Simples 3"},
                    {value:9, name:"Simples Escuro"},
                    {value:10, name:"Terreno"},
                    {value:11, name:"Terreno 2"},
                    {value:12, name:"Terreno 3"},
                    {value:13, name:"Satélite"},
            ]   )
            }
            {stickyTooltip && <React.Fragment><Divider style={{marginBottom:'0.5rem', marginTop:'0.5rem'}}/>{switchInput("Sticky Tooltip", "sticky_tooltips", options, setOptions, false)}</React.Fragment>}
        </React.Fragment>
    )
    return getSectionStructure("Mapa", details, null);
}