import { useState } from "react";

//  MUI
import InputLabel from "@mui/material/InputLabel";
import Drawer from "@mui/material/Drawer";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import SaveIcon from '@mui/icons-material/Save';

//  STRINGS
import { PLOT_SELECTION, SAVE_TOOLTIP } from "../../localization/ptPt";

export const handleSidebarOptions = (optionsFlag, sections, plotsInfo) => {
    return (
        <Drawer anchor="right" open={optionsFlag[0]} onClose={() => optionsFlag[1](false)}>
            {getPlotsSelection(plotsInfo)}
            {sections}
        </Drawer>
    )
}

export const getPlotsSelection = (plotsInfo) => {
    return (
        <div style={{minWidth:"14rem", margin:'1rem'}}>
            <FormControl size="small" fullWidth variant="filled">
                <InputLabel id="demo-simple-select-standard-label">{PLOT_SELECTION}</InputLabel>
                <Select labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard" sx={{fontSize:'0.9rem'}} value={plotsInfo[1]} onChange={(e) => plotsInfo[2](e.target.value)}>
                    {plotsInfo[0].map((elem, index) => {
                        return (
                            <MenuItem sx={{fontSize:'0.9rem'}} key={index} value={index}>
                                {elem}
                            </MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
        </div>
    )
}

export function SaveButton({id, options, watchOptions}){
    const [isSaving, setIsSaving] = useState(false);

    const onSave = () => {
        setIsSaving(true);
        setIsSaving(watchOptions(options, id));
    }

    return (
        <div style={{display:'flex', flexDirection:'row-reverse', margin:'1rem'}}>
            <Tooltip title={SAVE_TOOLTIP}>
                <Button disabled={isSaving} onClick={onSave} style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}} size="small" variant="contained"> 
                    <SaveIcon/> 
                </Button>
            </Tooltip>
        </div>
    )
}