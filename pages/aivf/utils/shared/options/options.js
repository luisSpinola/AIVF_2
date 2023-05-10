//  MUI
import InputLabel from "@mui/material/InputLabel";
import Drawer from "@mui/material/Drawer";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
//  STRINGS
import { PLOT_SELECTION } from "../../localization/ptPt";

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
        <div style={{minWidth:"16rem"}}>
            <FormControl size="small" fullWidth variant="filled">
                <InputLabel >{PLOT_SELECTION}</InputLabel>
                <Select sx={{fontSize:'0.9rem'}} value={plotsInfo[1]} onChange={(e) => plotsInfo[2](e.target.value)}>
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