import React from "react";
import { OPTIONS_MAP, OPTIONS_MAP_PERMANENT_TOOLTIP, OPTIONS_MAP_PERMANENT_TOOLTIP_INFO, OPTIONS_MAP_PERMANENT_TOOLTIP_ORDER, OPTIONS_MAP_TILESET_SELECTION } from "../../../../localization/ptPt";
import { selectInput, switchInput } from "../components/inputs";
import { getSectionStructure } from "../components/sectionStructure";

//  MUI
import Divider from "@mui/material/Divider";

export const getMapOptions = (options, setOptions, {stickyTooltip, order}) => {
    let details = (
        <React.Fragment>
            {selectInput(OPTIONS_MAP_TILESET_SELECTION, "map_leaf", options, setOptions, false, 
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
            {stickyTooltip && <React.Fragment><Divider style={{marginBottom:'0.5rem', marginTop:'0.5rem'}}/>{switchInput(OPTIONS_MAP_PERMANENT_TOOLTIP, "permanent_tooltips", options, setOptions, false)}</React.Fragment>}
            {order && options.permanent_tooltips && 
                <React.Fragment>
                    {switchInput("Veículos", "permanent_tooltips_cars", options, setOptions, false)}
                    {options.permanent_tooltips_cars && switchInput("Excluir previsão", "permanent_tooltips_cars_no_ghost", options, setOptions, false)}
                    {switchInput(OPTIONS_MAP_PERMANENT_TOOLTIP_ORDER, "permanent_tooltips_order", options, setOptions, false)}
                    {switchInput(OPTIONS_MAP_PERMANENT_TOOLTIP_INFO, "permanent_tooltips_info", options, setOptions, false)}
                </React.Fragment>
            }
        </React.Fragment>
    )
    return getSectionStructure(OPTIONS_MAP, details, null);
}