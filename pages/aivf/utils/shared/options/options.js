//  MUI
import InputLabel from "@mui/material/InputLabel";
import Drawer from "@mui/material/Drawer";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

//  STRINGS
import { PLOT_SELECTION } from "../../localization/ptPt";
import { SAVE_CACHE_NAME } from "../../default/defaults";

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


export const getCachedOptions = async (setPreviousOptions, setSelected, setIsOptionsLoaded, identifier, selected) => {
    if (typeof caches === 'undefined') return;
    const cacheStorage = await caches.open(SAVE_CACHE_NAME);
    const cachedResponse = await cacheStorage.match(SAVE_CACHE_NAME);
    return cachedResponse.json().then((item) => {
        let found = false;
        let found_selected = false;
        for(let i=0; i<item.length; i++){
            if(item[i].id === identifier[0]){
                for(let j=0; j<item[i].pages.length; j++){
                    if(item[i].pages[j].page_id === identifier[1]){
                        for(let y=0; y<item[i].pages[j].plotsCollection.length; y++){
                            if(item[i].pages[j].plotsCollection[y].plot_collection_id === identifier[2]){
                                if(setSelected !== null){
                                    found_selected = true;
                                    setSelected(item[i].pages[j].plotsCollection[y].selected);
                                }
                                for(let x=0; x<item[i].pages[j].plotsCollection[y].plot.length; x++){

                                    let comparedSelected = item[i].pages[j].plotsCollection[y].selected;
                                    if(setSelected === null) comparedSelected = selected;

                                    if(item[i].pages[j].plotsCollection[y].plot[x].plot_id === comparedSelected){
                                        found = true;
                                        setPreviousOptions(item[i].pages[j].plotsCollection[y].plot[x].options);
                                    }
                                }
                                
                            }
                        }
                    }
                }
            }
        }
        if(!found) {
            setPreviousOptions(null);
        };

        if(!found_selected && setSelected !== null) setSelected(0);

        setIsOptionsLoaded(true);
        
    })
}