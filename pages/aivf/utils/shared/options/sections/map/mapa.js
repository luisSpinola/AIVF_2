import React from "react";
import { OPTIONS_MAP, OPTIONS_MAP_PERMANENT_TOOLTIP, OPTIONS_MAP_PERMANENT_TOOLTIP_INFO, OPTIONS_MAP_PERMANENT_TOOLTIP_ORDER, OPTIONS_MAP_TILESET_SELECTION, OPTIONS_MAP_TILESET_SELECTION_NORMAL_1, OPTIONS_MAP_TILESET_SELECTION_NORMAL_2, OPTIONS_MAP_TILESET_SELECTION_NORMAL_3, OPTIONS_MAP_TILESET_SELECTION_NORMAL_4, OPTIONS_MAP_TILESET_SELECTION_SATELLITE, OPTIONS_MAP_TILESET_SELECTION_SIMPLE_1, OPTIONS_MAP_TILESET_SELECTION_SIMPLE_2, OPTIONS_MAP_TILESET_SELECTION_SIMPLE_3, OPTIONS_MAP_TILESET_SELECTION_SIMPLE_DARK_1, OPTIONS_MAP_TILESET_SELECTION_TERRAIN_1, OPTIONS_MAP_TILESET_SELECTION_TERRAIN_2, OPTIONS_MAP_TILESET_SELECTION_TERRAIN_3, OPTIONS_MAP_TILESET_SELECTION_TOPOLOGY_1, OPTIONS_MAP_TILESET_SELECTION_TOPOLOGY_2 } from "../../../../localization/ptPt";
import { selectInput, switchInput } from "../components/inputs";
import { getSectionStructure } from "../components/sectionStructure";

//  MUI
import Divider from "@mui/material/Divider";

export const getMapOptions = (options, setOptions, {stickyTooltip, order}) => {
    let details = (
        <React.Fragment>
            {selectInput(OPTIONS_MAP_TILESET_SELECTION, "map_leaf", options, setOptions, false, 
                [
                    {value:0, name:OPTIONS_MAP_TILESET_SELECTION_NORMAL_1},
                    {value:1, name:OPTIONS_MAP_TILESET_SELECTION_NORMAL_2},
                    {value:2, name:OPTIONS_MAP_TILESET_SELECTION_NORMAL_3},
                    {value:3, name:OPTIONS_MAP_TILESET_SELECTION_NORMAL_4},
                    {value:4, name:OPTIONS_MAP_TILESET_SELECTION_TOPOLOGY_1},
                    {value:5, name:OPTIONS_MAP_TILESET_SELECTION_TOPOLOGY_2},
                    {value:6, name:OPTIONS_MAP_TILESET_SELECTION_SIMPLE_1},
                    {value:7, name:OPTIONS_MAP_TILESET_SELECTION_SIMPLE_2},
                    {value:8, name:OPTIONS_MAP_TILESET_SELECTION_SIMPLE_3},
                    {value:9, name:OPTIONS_MAP_TILESET_SELECTION_SIMPLE_DARK_1},
                    {value:10, name:OPTIONS_MAP_TILESET_SELECTION_TERRAIN_1},
                    {value:11, name:OPTIONS_MAP_TILESET_SELECTION_TERRAIN_2},
                    {value:12, name:OPTIONS_MAP_TILESET_SELECTION_TERRAIN_3},
                    {value:13, name:OPTIONS_MAP_TILESET_SELECTION_SATELLITE},
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