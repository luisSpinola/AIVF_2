import React from "react";
import { OPTIONS_SECTION_LABELLIST} from "../../../../../localization/ptPt";
import { selectInput, switchInput, updateOptions } from "../../components/inputs";
import { getSectionStructure } from "../../components/sectionStructure";

//  MUI
import Switch from "@mui/material/Switch";
import Divider from "@mui/material/Divider";
import ColorSelector from "../ColorSelector";

export const getPieLabelListOptions = (options, setOptions) => {
    let switchComponent = <Switch size="small" checked={options.labelList} onChange={(e) => updateOptions("labelList", e.target.checked, options, setOptions)} onClick={(event) => event.stopPropagation()} onFocus={(event) => event.stopPropagation()}/>

    let disable = false;
    if(!options.labelList) disable = true;

    let details = (
        <React.Fragment>
            {selectInput("Modo", "labelList_mode", options, setOptions, disable, 
            [{value:1, name:"Normal"},
            {value:0, name:"Custom"}])}

            {(options.labelList_mode === 0) && <React.Fragment>
                    <Divider style={{marginBottom:'0.5rem', marginTop:'0.5rem'}}/>
                    {switchInput("Linha", "labelList_line", options, setOptions, disable)}
                </React.Fragment>}

            {(options.labelList_mode === 1) && <React.Fragment>
                <Divider style={{marginBottom:'0.5rem', marginTop:'0.5rem'}}/>
                {switchInput("Percentagem", "labelList_percent", options, setOptions, disable)}
                <Divider style={{marginBottom:'0.5rem', marginTop:'0.5rem'}}/>
                <ColorSelector option="labelList_color" options={options} setOptions={setOptions} size={1} opacity={false} section={false}/>
            </React.Fragment>}
        </React.Fragment>
    )

    return getSectionStructure(OPTIONS_SECTION_LABELLIST, details, switchComponent);
}